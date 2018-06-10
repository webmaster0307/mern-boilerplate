const mongoose = require('mongoose');

const { Schema } = mongoose;

const updateSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  text: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Updates', updateSchema);
