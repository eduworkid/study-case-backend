const router = require('express').Router()

const invoiceController = require('./controller')

router.get('invoice', invoiceController.show)

module.exports = router