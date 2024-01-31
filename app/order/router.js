const router = require('express').Router()
const orderController = require('./controller')
const {policeCheck} = require('../../middleware')

router.post('/orders',policeCheck('create', 'Order'), orderController.store)
router.get('/orders',policeCheck('view', 'Order'), orderController.index)

module.exports = router; 