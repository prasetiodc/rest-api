const model = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class Sign{
    static signin(req,res){
        model.User.findOne({where :{username:req.body.username}})
        .then(data=>{
            if(bcrypt.compareSync(req.body.password, data.password)){
                let token = jwt.sign({ id: data.id, role: data.role}, process.env.JWT_SECRET);
                // let token = jwt.sign({ role: data.role }, "ini rahasia kita");

                res.send(token)
            }
        })
        .catch(err=>{
            res.status(401).json(err)
        })
    }
}

module.exports=Sign