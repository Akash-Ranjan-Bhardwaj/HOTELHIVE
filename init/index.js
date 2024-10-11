const Hotel = require("../models/hotel.js");
const initData = require("./data.js");
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/HOTELHIVE");
}

const initDB = async () => {
  try {
    // Clear existing hotels
    await Hotel.deleteMany({});
    console.log("Cleared collection 'hotels'");

    // Owner ID to associate with all hotels
    const ownerId = "6706abf6655fbaed7ab9095e";

    // Map each hotel to include the owner
    const hotelsWithOwners = initData.data.map((hotel) => {
      return {
        ...hotel,
        owner: ownerId, // Assign the specific owner ID
      };
    });

    // Insert the hotels with owners
    await Hotel.insertMany(hotelsWithOwners);
    console.log("Reinitialized database with hotels and owner.");
  } catch (error) {
    console.error("Error reinitializing database:", error);
  }
};

initDB();
