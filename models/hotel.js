const mongoose = require('mongoose');

// Default image URL for hotels
const defaultImageUrl = "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

// Define the hotel schema
const hotelSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: defaultImageUrl,
    },
    price: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true,
    }
}, { timestamps: true });

// Method to print hotel details
hotelSchema.methods.details = function () {
    const name = this.title
        ? 'Name: ' + this.title
        : 'I don\'t have a name';
    console.log(name);
};

// Compile schema into a model
const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
