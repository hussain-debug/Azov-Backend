const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const applySchema = new Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  number: {
    type: Number,
    required: true,
  },
  whatsapp: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  board: {
    type: String,
    required: true,
  },
  neet: {
    type: Number,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  university: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Application", applySchema);
