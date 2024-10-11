const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/expressError");
const validateUser = require("../middleware/userValidation");

// Render signup form
router.get("/signup", (req, res) => {
    res.render("users/signup");
});

// Handle user registration (only username and password)
router.post("/signup", validateUser, wrapAsync(async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).send("Username already exists."); // Handle this as needed
        }

        const user = new User({ username });
        await User.register(user, password);
        req.login(user, err => {
            if (err) {
                throw new ExpressError("Login failed after registration", 500);
            }
            res.redirect("/hotels");
        });
    } catch (err) {
        console.log(err); // Log the full error
        res.redirect("/auth/users/signup"); // Ensure this path is correct
    }
}));

// Render login form
router.get("/login", (req, res) => {
    res.render("users/login");
});

// Handle user login
router.post("/login", validateUser, (req, res, next) => {
    if (!req.body.username || !req.body.password) {
        return res.redirect("/auth/users/login");
    }
    passport.authenticate("local", (err, user, info) => {
        if (err || !user) {
            return res.redirect("/auth/users/login");
        }
        req.login(user, (loginErr) => {
            if (loginErr) {
                return res.redirect("/auth/users/login");
            }
            const redirectUrl = req.session.returnTo || "/hotels";
            delete req.session.returnTo;
            res.redirect(redirectUrl);
        });
    })(req, res, next);
});

// Logout route
router.get("/logout", (req, res) => {
    req.logout(() => {
        res.redirect("/hotels");
    });
});

// Export the router
module.exports = router;
