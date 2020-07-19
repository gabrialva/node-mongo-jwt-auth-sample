const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  //get bearer header
  const bearerHeader = req.headers["authorization"];

  //check if token exists
  if (typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader.split(" ")[1];

    //verify token
    try {
      const decodedToken = jwt.verify(
        bearerToken,
        process.env.JWT_ACCESS_SECRET
      );
      req.user = decodedToken.id;
      next();
    } catch (err) {
      res.status(400).send(err);
    }
  } else {
    res.status(417).json({ message: "No token available" });
  }
}

module.exports = verifyToken;
