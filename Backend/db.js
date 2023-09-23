const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://Ewisedb:Ewisedb1234@cluster0.0aoj6pq.mongodb.net/EwiseDatabase?retryWrites=true&w=majority"
const mongoDB = async()=>{
  try{
    await mongoose.connect(mongoURI, { useNewUrlParser: true});
    if(err) console.log("---", err)
    else{
      console.log("Connected");
      const fetched_data = await mongoose.connection.db.collection("sellers");
      fetched_data.find({}).toArray(function(err, data){
        if(err) console.log(err);
        else{
          global.sellers = data;
          console.log(global.sellers);
        }
      })
  }
  } catch(error){
    console.log("Error");
  }
 };

module.exports = mongoDB;
