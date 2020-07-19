const express = require("express");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const postsRoute = require("./routes/posts");
var cookieParser = require("cookie-parser");
require("dotenv/config");

const app = express();

//Database
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => console.log("Connected to database"),
    (err) => {
      console.log(err);
    }
  );

//Middleware
app.use(express.json());
app.use(cookieParser());

//Routes
app.use("/api/posts", postsRoute);
app.use("/api/auth", authRoute);

//Start server
app.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${process.env.PORT}`)
);
