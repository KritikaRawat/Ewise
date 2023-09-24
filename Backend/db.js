const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://Ewisedb:Ewisedb1234@cluster0.0aoj6pq.mongodb.net/EwiseDatabase?retryWrites=true&w=majority"
const mongoDB = async()=>{
  try{
    await mongoose.connect(mongoURI, { useNewUrlParser: true});
      console.log("Connected");
  } catch(error){
    console.log("Error");
  }
 };

module.exports = mongoDB;