const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://anishrachcha:E5b33ckgT0M8mHNo@cluster0.fjnvs02.mongodb.net/";

const connectToMongo = async () => {
  await mongoose.connect(mongoURI, { useNewUrlParser: true }, (err) => {
    if (err) console.log("error", err);
    console.log("DB connected succesfully");
  });
};

module.exports = connectToMongo;
