const mongoose = require("mongoose");
const URI = process.env.MOngourl;
const connectDb = async (req, res) => {
  try {
    await mongoose.connect(URI);
    console.log("Connection successful.");
  } catch (error) {
    console.error(error);
    process.exit(0);
  }
};

module.exports = connectDb;
