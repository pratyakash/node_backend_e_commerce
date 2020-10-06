const router = require('express').Router();
const product_controller = require('../controllers/product');

router
    .get('/get_product_by_id', (req, res) => product_controller.get_product_by_id(req, res))
    .get('/get_all_product_by_restaurant_id', (req, res) => product_controller.get_all_product_by_restaurant_id(req, res))
    .post('/save_product', (req, res) => product_controller.save_product(req, res))
    .delete('/delete_product', (req, res) => product_controller.delete_product(req, res))
    .put('/update_product', (req, res) => product_controller.update_product(req, res))

module.exports = router;