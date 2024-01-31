const DeliveryAddressController = require('./controller')
const {policeCheck} = require('../../middleware')
const router = require('express').Router()

router.post(
  "/delivery-address",
  policeCheck("create", "DeliveryAddress"),
  DeliveryAddressController.store
);
router.put("/delivery-address/:id", DeliveryAddressController.update);
router.delete("/delivery-address/:id", DeliveryAddressController.destroy);
router.get(
  "/delivery-address",
  policeCheck("view", "DeliveryAddress"),
  DeliveryAddressController.index
);
router.get(
  "/delivery-address/:deliveryId",
  policeCheck("view", "DeliveryAddress"),
  DeliveryAddressController.getById
);
router.get("/delivery-addres/:userId", DeliveryAddressController.getByuserId);

module.exports = router; 