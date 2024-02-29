const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'gR@T!p0S2$9g#YqgsVVrVdQf3S5FD3FE3b&K4J*F7c5Z#A6Q@L6#C7gF8W!P5K');
        const userId = decodedToken.userId;
        req.auth = {
            userId: userId
        };
        next();
    }
    catch (error) {
        res.status(401).json({ error });
    }
};