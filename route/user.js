const router = require('express').Router()
const user = require('../controllers/user')
const {authentication} = require('../middleware/authentication')
const {authorization} = require('../middleware/authorization')
const {authenticated} = require('../middleware/authenticated')


router.get('/', authentication, authorization, user.list)

router.get('/:id', authentication, authenticated, user.profil)

router.post('/', authentication, authorization, user.create)

router.delete('/:id', authentication, authorization, user.delete)

router.put('/:id', authentication, authenticated, user.update)

module.exports = router