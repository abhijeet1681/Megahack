// server/seeds/adminSeed.js

const mongoose = require("mongoose");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Replace with your actual MongoDB connection string
const MONGO_URI = "mongodb://localhost:27017/yourDB";

const seedAdmin = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const adminEmail = "admin@example.com";
    const adminPassword = "admin123";

    // Check if admin already exists
    const adminExists = await User.findOne({ email: adminEmail });
    if (adminExists) {
      console.log("Admin already exists");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    const admin = new User({
      name: "Admin",
      email: adminEmail,
      password: hashedPassword,
      role: "admin", // This flag distinguishes the admin user
    });

    await admin.save();
    console.log("Admin created successfully");
    process.exit();
  } catch (error) {
    console.error("Error seeding admin:", error);
    process.exit(1);
  }
};

seedAdmin();
