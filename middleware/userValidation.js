const { userSchema } = require("../validation/userValidation");

const validateUser = async (req, res, next) => {
    const { error } = userSchema.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message); // Or handle as needed
    }
    next();
};

module.exports = validateUser;
