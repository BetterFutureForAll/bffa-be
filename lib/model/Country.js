const { Schema, model } = require('mongoose');

const schema = new Schema ({

  country: {
    type: String,
    required: true
  },

  code: {
    type: String,
    required: true
  },

  spiScore: {

  }


});

module.exports = model('Country', schema);