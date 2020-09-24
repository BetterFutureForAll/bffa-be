const { Schema, model } = require('mongoose');

const schema = new Schema ({

  year: {
    type: Number,
    required: true
  },

  country: {
    //array of all data from a row vs reference to a country element.
  }

});

module.exports = model('Year', schema);