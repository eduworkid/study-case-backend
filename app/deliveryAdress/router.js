const DeliveryAddressController = require('./controller')
const {policeCheck} = require('../../middleware')
const router = require('express').Router()

router.post('/delivery-adress',policeCheck('create','DeliveryAddress'), DeliveryAddressController.store);
router.put('/delivery-adress/:id', DeliveryAddressController.update);
router.delete('/delivery-adress/:id', DeliveryAddressController.destroy);
router.get('/delivery-adress',policeCheck('view','DeliveryAddress'), DeliveryAddressController.index);

module.exports = router;