module.exports = {
    authorization: function(req, res, next) {
        if(req.data.role=="admin"){
            next()
        }else{
            res.status(401).json("ANDA BUKAN ADMIN")
        }
    }
}