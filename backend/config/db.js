const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGODB_URI);

const connectDB = async () => {
  try {
    await client.connect();
    console.log("MongoDB Connected Successfully ✅");
  } catch (error) {
    console.error("MongoDB Connection Failed ❌", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;