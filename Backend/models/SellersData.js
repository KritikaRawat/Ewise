const mongoose = require('mongoose')
const {Schema} = mongoose;

const SellerSchema = new Schema({
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
 sellerType:{
  type: String,
  required: true
 },
 Address:{
  type: String,
  required: true
 },
 imglink:{
  type: Buffer,
  contentType: String,
  required: true
 },
 mapLink:{
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

module.exports = mongoose.model('seller',SellerSchema);