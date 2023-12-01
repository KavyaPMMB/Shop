const mongoose = require("mongoose");

const connection = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://Abhi12345:Abhi8089@cluster0.yexsq.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("database is running");
  } catch (err) {
    console.log(`error:${err}`);
  }
};

module.exports = connection;
