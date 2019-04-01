const model = require('../models')
const bcrypt = require('bcryptjs')

class User{
    static list(req, res){
        model.User.findAll()
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            res.status(404).json(err)
        })
    }

    static profil(req, res){
        model.User.findByPk(req.params.id)
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            res.status(404).json(err)
        })
    }

    static create(req, res){
        model.User.create({
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password, 10),
            role: req.body.role
        })
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            res.status(404).json(err)
        })
    }

    static delete(req, res){
        model.User.destroy({where:{id : req.params.id}})
        .then(data=>{
            res.status(200).json("data terhapus")
        })
        .catch(err=>{
            res.status(404).json(err)
        })
    }

    static update(req, res){
        model.User.findByPk(req.params.id)
        .then(data=>{
            data.username= req.body.username,
            data.password= bcrypt.hashSync(req.body.password, 10),
            data.role= req.body.role
            return data.save()
        })
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            res.status(404).json(err)
        })
    }
}

module.exports = User