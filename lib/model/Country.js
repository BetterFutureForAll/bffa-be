const { Schema, model } = require('mongoose');

const schema = new Schema ({

  name: {
    type: String,
    required: true
  },

  code: {
    type: String,
    required: true
  },

  spiScore: {
    type: Number,
    required: true
  },

  spiElements: {
    //reference to the subcategories or embed them here?
  }


});

module.exports = model('Country', schema);