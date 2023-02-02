const { Schema, model } = require("mongoose");

const NewsletterSchema = new Schema(
  {
    email: {
      type: String,
      require: true,
    },
    Newsletter: { type: String, require: true },
  },
  { timestamps: true }
);

const userSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const newsletterModel = new model("Newsletter", NewsletterSchema);
const User = new model("user", userSchema);

module.exports = { newsletterModel, User };

// database
// collection
// document
