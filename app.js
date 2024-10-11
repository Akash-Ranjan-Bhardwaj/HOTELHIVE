require('dotenv').config(); // Load environment variables

const express = require("express");
const path = require("path");
const engine = require("ejs-mate");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
const MongoStore = require("connect-mongo");
const crypto = require("crypto"); // Use crypto for secure session secret
const User = require("./models/user");
const errorHandler = require("./middleware/errorhandler.js");
const checkSession = require("./middleware/checkSession.js");
const ExpressError = require("./utils/expressError");
const hotelRoutes = require("./routes/hotel"); // Import hotel routes
const userRoutes = require("./routes/user"); // Import user routes

const port = process.env.PORT || 3000;
const app = express();

// MongoDB connection using .env configuration
const database_url = process.env.MONGO_URI;

// Connect to MongoDB Atlas
async function connectDB() {
    try {
        await mongoose.connect(database_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB Atlas");
    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
    }
}

connectDB();

// Static files and view engine setup
app.use(express.static(path.join(__dirname, "public")));
app.use('/uploads', express.static('uploads'));
app.engine("ejs", engine);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware setup
app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Generate a secure secret using crypto
const sessionSecret = crypto.randomBytes(32).toString('hex');
const store = MongoStore.create({
    mongoUrl: database_url,
    collectionName: 'sessions',
    ttl: 14 * 24 * 60 * 60, // 14 days session expiration
    autoRemove: 'native',
    touchAfter: 24 * 3600 // Update session once every 24 hours if unchanged 
});

// Error handling for MongoStore
store.on('error', (err) => {
    console.error('Session Store Error:', err);
});

// Session Middleware for login sessions, using MongoStore for session persistence
app.use(session({
    secret: process.env.SESSION_SECRET, // Secure session secret
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: { 
        secure: false, // Set true if using HTTPS
        maxAge: 1000 * 60 * 60 * 24 * 7 // 1-week expiration for cookies
    }
}));

app.use(passport.initialize());
app.use(passport.session());

// Pass the user object to all views
app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

// Passport configuration
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Route for checking active session
app.get('/session', (req, res) => {
    if (req.session) {
        console.log(req.session);
        res.json({ message: 'Session is active', session: req.session });
    } else {
        res.status(401).json({ message: 'No session started' });
    }
});

// Route to check if user is logged in
app.get('/auth/check-logged-in', checkSession, (req, res) => {
    console.log(req.session);
    res.json({ message: 'User is logged in', user: req.session.user });
});

// Routes for hotels and user authentication
app.use("/hotels", hotelRoutes);
app.use("/auth/users", userRoutes);

// Wildcard route for 404 errors (Page not found)
app.all("*", (req, res, next) => {
    next(new ExpressError("Page Not Found", 404));
});

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
