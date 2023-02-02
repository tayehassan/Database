const express = require("express");
const { subscribersRouter, usersRouter } = require("./routes");
// const { errorMiddleware, notFoundMiddleware } = require("./src/middleware");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ msg: "welcome to Voiceout2me Email Subscribers Database" });
});

app.use("/Newsletter", subscribersRouter);
app.use("/user", usersRouter);

// app.use(errorMiddleware);
// app.use(notFoundMiddleware);
module.exports = app;
