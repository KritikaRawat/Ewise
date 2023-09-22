const mongoose = require('mongoose')
const {Schema} = mongoose;

const BuyerSchema = new Schema({
 name:{
  type: String,
  required: true
 },
 email:{
  type: String,
  required: true
 },
 password:{
  type: String,
  required: true
 },
 PhoneNum:{
  type: Number,
  required: true
 },
 myDateField: {
  type: Date,
  default:Date.now 
 }

});

module.exports = mongoose.model('buyer',BuyerSchema);