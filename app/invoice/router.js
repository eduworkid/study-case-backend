const router = require('express').Router()

const invoiceController = require('./controller')

router.get("/info/:order_id'", invoiceController.getInvoice);
router.get("/invoice/:order_id", invoiceController.gettingInvoice);

module.exports = router