const express = require("express");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
require("dotenv/config");

const app = express();

//Database
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to db")
);

//Middleware
app.use(express.json());
app.use("/api/user", authRoute);

//Start server
app.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${process.env.PORT}`)
);
