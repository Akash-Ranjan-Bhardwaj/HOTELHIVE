const Joi = require('joi');

// Validation schema for hotel registration
const ValidateHotel = Joi.object({
    title: Joi.string()
        .min(3)
        .max(100)
        .required(),

    description: Joi.string()
        .min(1)
        .max(500)
        .required(),

    location: Joi.string()
        .required(),

    country: Joi.string()
        .min(1)
        .max(100)
        .required(), // Ensure country is a string

    price: Joi.number()
        .greater(0) // Ensure price is a positive number
        .required(), // Make price required

    image: Joi.string().uri() // Optionally validate the image URL format
});

// Export the validation schema
module.exports = ValidateHotel;
