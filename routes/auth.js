const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv/config");

//Create user
router.post("/register", async (req, res) => {
  //Check if user already exists
  const userExists = await User.findOne({ email: req.body.email });

  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //Create new user
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    const registeredUser = await user.save();
    res.json({
      id: registeredUser._id,
      username: registeredUser.username,
      email: registeredUser.email,
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

//generate tokens
router.post("/token", async (req, res) => {
  //check if user exists
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).send("User not found");
  }

  //check if password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) {
    return res.status(400).send("Password is wrong");
  }

  //generate JWT
  const payload = { id: user._id };

  const token = jwt.sign(
    { ...payload, tokenType: "access" },
    process.env.JWT_ACCESS_SECRET,
    {
      expiresIn: process.env.JWT_ACCESS_LIFE,
    }
  );

  const refreshToken = jwt.sign(
    { ...payload, tokenType: "refresh" },
    process.env.JWT_REFRESH_SECRET,
    {
      expiresIn: process.env.JWT_REFRESH_LIFE,
    }
  );

  //set refresh token cookie
  res.cookie("RefreshToken", refreshToken, {
    httpOnly: true,
  });

  //return access token
  res.json({
    Token: token,
  });
});

router.post("/token/refresh", async (req, res) => {
  const refreshToken = req.cookies.RefreshToken;

  //verify refresh token
  try {
    const decodedToken = jwt.verify(
      refreshToken,
      process.env.JWT_REFRESH_SECRET
    );

    const user = await User.findOne({ _id: decodedToken.id });

    const payload = { id: user._id };

    const token = jwt.sign(
      { ...payload, tokenType: "access" },
      process.env.JWT_ACCESS_SECRET,
      {
        expiresIn: process.env.JWT_ACCESS_LIFE,
      }
    );
    res.json({ Token: token });
  } catch (err) {
    res.status(400).send("fail");
  }
});
module.exports = router;
