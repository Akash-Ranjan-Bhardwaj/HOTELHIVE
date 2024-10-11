const express = require("express");
const router = express.Router();
const Hotel = require("../models/hotel");
const ValidateHotel = require("../validation/hotelValidation");
const ExpressError = require("../utils/expressError");
const wrapAsync = require("../utils/wrapAsync");
const isLoggedIn = require("../middleware/isLoggedIn"); // Import the isLoggedIn middleware
const multer  = require('multer');

const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");


// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Configure multer to use Cloudinary Storage
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'hotels-thumbnail', // The name of the folder in your Cloudinary account
        allowed_formats: ['jpg', 'png', 'jpeg'], // Allowed image formats
    },
});

const upload = multer({ storage: storage });

// Home route to list hotels
router.get("/", wrapAsync(async (req, res) => {
    const hotels = await Hotel.find({});
    res.render("hotels/index.ejs", { hotels });
}));

// Render new hotel form (requires authentication)
router.get("/new", isLoggedIn, (req, res) => {
    res.render("hotels/newHotel.ejs");
});

// Route to handle hotel creation (requires authentication)

router.post("/", isLoggedIn,upload.single('image'), wrapAsync(async (req, res, next) => {
    try {
        await ValidateHotel.validateAsync(req.body);
        const { title, description, location, country, price, image } = req.body;
        console.log(req.file);
         // Use the uploaded image path from multer, if available
         const imagePath = req.file.path; // This gives you the URL of the uploaded image
        const newHotel = new Hotel({
            title,
            description,
            location,
            country,
            price: Number(price),
            image: imagePath,
            owner: req.user._id // Set the owner as the logged-in user
        });

        await newHotel.save();
        res.redirect("/hotels");
    } catch (err) {
        if (err.isJoi) {
            // Render the form with validation error message
            return res.render("hotels/newHotel.ejs", {
                errorMessage: "Validation error: " + err.details[0].message,
                hotel: req.body // Preserve the entered data
            });
        }
        next(err); // Pass other errors to the error handler
    }
}));


// Show hotel details
router.get("/:id", wrapAsync(async (req, res, next) => {
    const hotel = await Hotel.findById(req.params.id).populate('owner');
    if (!hotel) {
        return next(new ExpressError("Hotel not found", 404));
    }
    res.render("hotels/show.ejs", { hotel });
}));

// Render edit hotel form (requires authentication)
router.get("/:id/edit", isLoggedIn, wrapAsync(async (req, res, next) => {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) {
        return next(new ExpressError("Hotel not found", 404));
    }
    res.render("hotels/editHotel.ejs", { hotel });
}));

// Update hotel details (requires authentication)
router.put("/:id", isLoggedIn, wrapAsync(async (req, res, next) => {
    const { title, description, location, country, price, image } = req.body;
    const updatedHotel = {
        title,
        description,
        location,
        country,
        price: Number(price),
        image: image || undefined,
        owner: req.user._id // Ensure the owner is updated to the logged-in user
    };

    await Hotel.findByIdAndUpdate(req.params.id, updatedHotel);
    res.redirect(`/hotels/${req.params.id}`);
}));

// Delete hotel (requires authentication)
router.delete("/:id", isLoggedIn, wrapAsync(async (req, res, next) => {
    await Hotel.findByIdAndDelete(req.params.id);
    res.redirect("/hotels");
}));

// Wildcard route for 404 errors (Page not found)
router.all("*", (req, res, next) => {
    next(new ExpressError("Page Not Found", 404));
});


module.exports = router;
