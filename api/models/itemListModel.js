'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ItemSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the item'
  },
  price: {
    type: Number,
    default: 0
  },
  company: {
    type: String,
    default: 'JW Works'
  }
});

module.exports = mongoose.model('Items', ItemSchema);