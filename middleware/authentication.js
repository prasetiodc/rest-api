const jwt = require('jsonwebtoken')

module.exports = {
    authentication: function(req, res, next) {
        try {
            let decoded = jwt.verify(req.headers.token, process.env.JWT_SECRET);
            //kalo bener
            req.data = decoded
            // res.send(req.data)
            next()
        } catch (error) {
            res.status(401).json("No authentication")
        }
    }
}