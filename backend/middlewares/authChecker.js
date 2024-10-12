
const jwt = require('jsonwebtoken');

const ensureAuthentication = (req, res, next) => {
    const auth = req.headers['authorization'];
    if(!auth) {
        return res.status(403).json({message : "Unauthorized Access"});
    }

    try {
        const decoded = jwt.verify(auth, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({message : "Unauthorized Access"});
    }
};

module.exports = ensureAuthentication;