const { newsletterModel, User } = require("./models");
const bcrypt = require("bcrypt");
const saltRounds = 10;

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

exports.signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  User.exists({ email: email }, (err, exist) => {
    if (err) {
      console.log(err);
    } else {
      exist
        ? res.json({ msg: "user already exist" })
        : bcrypt.hash(password, saltRounds, function (err, hash) {
            if (err) {
              console.log(err);
            } else {
              User.create({
                name: name,
                email: email,
                password: hash,
              });
              res.json({ msg: "your registration was successful" });
            }
          });
    }
  });
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, foundUser) => {
    err
      ? console.log(err)
      : bcrypt.compare(password, foundUser.password, (err, result) => {
          err
            ? console.log(err)
            : result
            ? res.json({ msg: "you are successfully login" })
            : res
                .status(403)
                .json({ msg: "either your password or username is wrong" });
        });
  });
};
