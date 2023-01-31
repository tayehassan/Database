const { newsletterModel } = require("./models");

exports.emailSubscribe = async (req, res, next) => {
  try {
    const body = req.body;
    const existingSubscriber = await newsletterModel.exists({
      email: body["email"],
    });
    if (existingSubscriber)
      return res.json({ msg: "you are already a subscriber" });
    body["Newsletter"] = "subscribed";
    await newsletterModel.create(body);
    res.send("your subscription is successful");
  } catch (err) {
    res.send(err);
  }
};

exports.emailUnsubscribed = async (req, res, next) => {
  try {
    const id = await newsletterModel.findById(req.params.id);
    await newsletterModel.findByIdAndUpdate(id, { Newsletter: "unsubscribed" });
    res.send("you have successfully unsubscribed from our newsletter");
  } catch (err) {
    res.send(err);
  }
};
