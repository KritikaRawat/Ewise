// const express = require('express')
// const app = express()
// const port = 5000
// const mongoDB = require("./db")
// mongoDB();

// app.use((req, res, next)=>{
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// })

// app.use(express.json())

// app.use('/api', require("./Routes/BuyerUsers"));
// app.use('/api', require("./Routes/SellerUsers"));
// app.use('/api', require("./Routes/RegSellers"));
// app.use('/api', require("./Routes/Createitemsprice"));

// app.get('/', (req, res) => {
//   res.send('Hello World! ---------------')
// }) 

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


//------------------------------------------------------
const express = require('express')
const app = express()
const port = 5000
const mongoDB = require("./db")
mongoDB();

app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})

app.use(express.json())

app.use('/api', require("./Routes/BuyerUsers"));
app.use('/api', require("./Routes/SellerUsers"));
app.use('/api', require("./Routes/RegSellers"));
app.use('/api', require("./Routes/Createitemsprice"));
app.use('/api', require("./Routes/OrderData"));

app.get('/', (req, res) => {
  res.send('Hello World! ---------------')
}) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})