const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    const token = req.header('Authorization'); // Get token from headers

    if (!token) return res.status(401).json({ message: "Access Denied" });

    try {
        const verified = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET); // Verify token
        req.user = verified; // Store user info in req.user
        next(); // Continue to the next middleware
    } catch (err) {
        res.status(400).json({ message: "Invalid Token" });
    }
};
