// Importing modules
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

// Define the User schema (no email required)
const UserSchema = new Schema({
    username: { type: String, unique: true, required: true }
});

// Plugin for passport-local-mongoose (handles password hashing and authentication)
UserSchema.plugin(passportLocalMongoose, { usernameField: 'username' });

// Create the User model
const User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;
