const model = require('../models')

module.exports = {
    authenticated: function(req, res, next) {
        model.User.findByPk(req.data.id)
        .then(dataUser=>{
            if(req.data.role=="admin"){
                next()
            }else if(req.params.id==req.data.id){
                next()
            }else {
                res.status(401).json("No authorization")
            }
            
        })
        
    }
}