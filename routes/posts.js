const router = require("express").Router();
const verifyToken = require("../middlewares/verifyToken");

//example protected route -> include verifyToken Middleware
router.get("/", verifyToken, (req, res) => {
  res
    .status(418)
    .send(`protected posts route -> logged in with user id ${req.userId}`);
});

module.exports = router;
