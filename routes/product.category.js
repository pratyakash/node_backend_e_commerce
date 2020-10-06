const router = require('express').Router();
const product_category_controller = require('../controllers/product.category');

router
    .get('/get_all_product_category', (req, res) => product_category_controller.get_all_product_category(req, res))
    .post('/save_product_category', (req, res) => product_category_controller.save_category(req, res))
    .put('/update_product_category', (req, res) => product_category_controller.update_category(req, res))

module.exports = router;