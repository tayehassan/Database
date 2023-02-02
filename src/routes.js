const express = require("express");
const {
  emailSubscribe,
  emailUnsubscribed,
  login,
  signup,
} = require("./controllers");

const subscribersRouter = express.Router();

const usersRouter = express.Router();

subscribersRouter
  .post("/subscribe", emailSubscribe)
  .put("/unsubscribe/:id", emailUnsubscribed);

usersRouter.post("/login", login);
usersRouter.post("/signup", signup);

module.exports = { subscribersRouter, usersRouter };
