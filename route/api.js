const router = require('express').Router()
const user = require('../controllers/user')
const sign = require('../controllers/signin')
const {authentication} = require('../middleware/authentication')
const {authorization} = require('../middleware/authorization')


router.post('/signup', authentication, authorization, user.create)

router.post('/signin', sign.signin)

module.exports = router