const express = require("express");
const productController = require("../controller/productController")
const router = express.Router()

router.post('/',productController.product_create)
router.get('/', productController.product_all)
router.get('/:productId', productController.product_details)
router.put('/:productId',productController.product_update)
router.delete('/:productId', productController.product_delete)

module.exports = router;