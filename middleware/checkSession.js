const checkSession = (req, res, next) => {
    if (req.session && req.session.passport && req.session.passport.user) {
        // Session is started and user is logged in
        next(); // Proceed to the next middleware or route handler
    } else {
        // Session not started or user not logged in
        res.status(401).send("Unauthorized: No session found");
    }
};

module.exports = checkSession;
