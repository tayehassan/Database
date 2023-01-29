const emailExists = require("email-exists");
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
    res.status(200).json({ msg: "your subscription is successful" });
  } catch (err) {
    res.json(err);
  }
};

exports.emailUnsubscribed = async (req, res, next) => {
  try {
    const id = await newsletterModel.findById(req.params.id);
    await newsletterModel.findByIdAndUpdate(id, { Newsletter: "unsubscribed" });
    res.json({ msg: "you have successfully unsubscribed from our newsletter" });
  } catch (err) {
    console.log(err);
  }
};
