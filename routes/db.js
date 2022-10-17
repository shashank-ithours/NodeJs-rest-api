const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    });
    console.log(`Mongo db connected`);
  } catch (err) {
    console.log(err);
    process.exit();
  }
};
module.exports = connectDB;