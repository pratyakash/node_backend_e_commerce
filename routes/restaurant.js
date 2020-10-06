const router = require('express').Router();
const restaurant_controller = require('../controllers/restaurant');

router
    .get('/get_all_restaurant', (req, res) => restaurant_controller.get_all_restaurant(req, res))
    .get('/get_restaurant_by_id', (req, res) => restaurant_controller.get_restaurant_by_id(req, res))
    .post('/save_restaurants', (req, res) => restaurant_controller.save_restaurants(req, res))
    .delete('/delete_restaurants', (req, res) => restaurant_controller.delete_restaurants(req, res))
    .put('/update_restaurant', (req, res) => restaurant_controller.update_restaurant(req, res))

module.exports = router;