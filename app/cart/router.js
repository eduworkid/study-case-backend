const {policeCheck} = require('../../middleware')
const cartController = require('./controller')
const router = require('express').Router()

router.get('/carts', policeCheck('read', 'Cart'),cartController.index)
router.put('/carts',policeCheck('update', 'Cart'), cartController.update)

module.exports = router;