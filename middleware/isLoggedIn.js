// middleware/isLoggedIn.js
function isLoggedIn(req, res, next) {
    if (!req.isAuthenticated()) {
        //req.flash('error', 'You must be logged in to do that!');
        return res.redirect('/login'); // Redirect to login page
    }
    next(); // User is logged in, proceed to the next middleware/route handler
}

module.exports = isLoggedIn;
