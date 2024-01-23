// const mongoose = require("mongoose");

// const URL =
//   "mongodb+srv://dewanshgupta120:kirito123@devmern.pauihib.mongodb.net/";

// const connectdb = async () => {
//   try {
//     await mongoose.connect(URL);

//     console.log(`Connected successfully to mongoose`);
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error.message);
//     process.exit(1); // Exit the application with an error code
//   }
// };

// module.exports = connectdb;

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
