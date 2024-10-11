const Joi = require('joi');

const userSchema = Joi.object({
    username: Joi.string().min(1).required().messages({
        'string.base': 'Username should be a string.',
        'string.min': 'Username must be at least 3 characters long.',
        'any.required': 'Username is required.',
    }),
    password: Joi.string().min(1).required().messages({
        'string.base': 'Password should be a string.',
        'string.min': 'Password must be at least 6 characters long.',
        'any.required': 'Password is required.',
    }),
});

module.exports = { userSchema };
