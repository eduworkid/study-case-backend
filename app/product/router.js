const router = require('express').Router();
const multer = require('multer');
const os = require('os');
const {policeCheck} = require('../../middleware')

const productControllers = require('./controller');

router.get('/products',productControllers.index)
router.post('/products',multer({dest: os.tmpdir()}).single('image_url'),policeCheck('create','Product'),productControllers.store);
router.put('/products/:id',multer({dest: os.tmpdir()}).single('image_url'),policeCheck('update','Product'),productControllers.update);
router.delete('/products/:id',policeCheck('delete','Product'),productControllers.destroy)
module.exports = router;
   