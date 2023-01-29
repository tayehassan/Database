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

const newsletterModel = model("Newsletter", NewsletterSchema);

module.exports = { newsletterModel };

// database
// collection
// document
