const express = require("express");
const { emailSubscribe, emailUnsubscribed } = require("./controllers");

const subscriberRouter = express.Router();

const usersRouter = express.Router();

subscriberRouter.post("/subscribe", emailSubscribe);
subscriberRouter.put("/unsubscribe/:id", emailUnsubscribed);

usersRouter.post();

module.exports = subscriberRouter;
