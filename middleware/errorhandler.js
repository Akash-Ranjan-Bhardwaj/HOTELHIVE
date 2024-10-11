const errorHandler = (err, req, res, next) => {
    const { statusCode = 500 } = err;
    console.log(err);
    res.status(statusCode).render("err.ejs", { error: err });
};

module.exports = errorHandler;
