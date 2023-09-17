const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://gagan2002:gofood@cluster0.ninm9qa.mongodb.net/gofood?retryWrites=true&w=majority";

const mongoDb = async () => {
  await mongoose.connect(
    mongoURI,
    { useNewUrlParser: true },
    async (err, result) => {
      if (err) console.log(err);
      else {
        console.log("Connected");
      const fetch_data = await mongoose.connection.db.collection("food_items");
        fetch_data.find({}).toArray(async (err, data) => {
      const foodCategory = await mongoose.connection.db.collection("food_category");
          foodCategory.find({}).toArray((err, catData) => {
            if (err) console.log(err);
            else {
              global.food_item = data;
              global.food_category = catData;
            }
          });
        });
      }
    }
  );
};

module.exports = mongoDb;
