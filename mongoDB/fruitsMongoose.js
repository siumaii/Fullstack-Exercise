const mongoose = require("mongoose");
const assert = require("assert");

// Connection URL + database name
mongoose.connect("mongodb://localhost:27017/fruits", { useNewUrlParser: true, useUnifiedTopology: true } );

const fruitSchema = new mongoose.Schema ({
name: String,
rating: Number,
review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({
  const apple = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Good"
})
// fruit.save();
const pear = new Fruit({
  name: "Pear",
  rating: 6,
  review: "OK"
})
const orange = new Fruit({
  name: "Orange",
  rating: 6,
  review: "Fresh"
})

Fruit.insertMany([apple, pear, orange], function(err){
  if(err){
    console.log(err);
  } else {
    mongoose.connection.close();
    console.log("Saved all fruits to database.")
  }
})

