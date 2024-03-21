// const { default: mongoose } = require('mongoose');
const mg = require("mongoose");
mg.connect("mongodb://127.0.0.1:27017/aadesh")
  .then(() => {
    console.log("success");
  })
  .catch((err) => {
    console.error(err);
  });
//mg.pluralize(null)
const mySchema = new mg.Schema({
  user: {
    type: mg.Schema.Types.ObjectId,
    ref: "user",
  },
  title: {
    type: String,
    required: true,
  },

  description: String,
  tag: String,
  date: {
    type: Date,
    default: new Date(),
  },
});
const Notes = new mg.model("person", mySchema);
module.exports = Notes;
