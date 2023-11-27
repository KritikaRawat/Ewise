const mongoose = require('mongoose')
const {Schema} = mongoose;

const itemspriceschema = new Schema({
 name:{
  type: String,
  required: true
 },
 price:{
  type: Number,
  required: true
 }
});

module.exports = mongoose.model('Itemsprice',itemspriceschema);