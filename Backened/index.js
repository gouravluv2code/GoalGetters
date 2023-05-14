const express = require("express");
const app = express();
const connection = require("./db");

const { auth } = require("./middleware/auth.middleware");
const { govRouter } = require("./Routes/gourav.route");
const { FitRouter } = require("./Routes/fitness.route");
const cors = require("cors");
require("dotenv").config();

//Import userRouter
const { userRouter } = require("./Routes/user.router");

app.use(cors());
app.use(express.json());


app.use("/gData", govRouter);
app.use("/", FitRouter);

app.use("/users", userRouter);


app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("mongo connected");
  } catch (err) {
    console.log("cannot connect to the db");
  }
  console.log("Port 8080 is running");
});
