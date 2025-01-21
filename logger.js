const logger = () => {
    console.log(req.method,req.originalUrl);
    next();
}

module.exports = logger