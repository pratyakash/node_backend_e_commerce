const { db } = require('../models');
const { find_all, save, delete_data, update } = require('../dal');
const response_helper = require('../utils/res.helper');
const { log } = require('../utils/log');
const { LOGS_LEVEL } = require('../utils/constants');


const get_all_restaurant = async(req, res) => {
    try {
        
        const where = {
            is_active: 1
        };

        const all_restaurant = await find_all(db.restaurant, where);

        response_helper.success(res, 200, all_restaurant, 'Fetch Successful', undefined, undefined);

    } catch (error) {
        log('Getting Restro' + error, LOGS_LEVEL.ERROR);
        response_helper.error(res, error, error.code ? error.code : 404, 'Getting All Restro');
    }
};


const save_restaurants = async(req, res) => {
    try {
        const { body } = req;
        const { restaurant } = body;

        const saved_restaurant = await save(db.restaurant, restaurant);
        
        response_helper.success(res, 200, saved_restaurant, 'Saved Successful', undefined, undefined);
    } catch (error) {
        log('Saving Restro' + error, LOGS_LEVEL.ERROR);
        response_helper.error(res, error, error.code ? error.code : 404, 'Saving Restro');
    }
};

const update_restaurant = async(req, res) => {
    try {
        const { body } = req;
        const { restaurant } = body;

        const saved_restaurant = await update(db.restaurant, restaurant);
        
        response_helper.success(res, 200, saved_restaurant, 'Update Successful', undefined, undefined);
    } catch (error) {
        log('Saving Restro' + error, LOGS_LEVEL.ERROR);
        response_helper.error(res, error, error.code ? error.code : 404, 'Saving Restro');
    }
};


const delete_restaurants = async(req, res) => {
    try {
        const { query } = req;
        const { id } = query;

        await delete_data(db.restaurant, id);

        response_helper.success(res, 200, {}, 'Delete Successful', undefined, undefined);
        
    } catch (error) {
        log('Deleting Restro' + error, LOGS_LEVEL.ERROR);
        response_helper.error(res, error, error.code ? error.code : 404, 'Deleting Restro');
    }
};


const get_restaurant_by_id = async(req, res) => {
    try {
        
        const where = {
            is_active: 1
        };

        const all_restaurant = await find_all(db.restaurant, where);

        response_helper.success(res, 200, all_restaurant, 'Fetch Successful', undefined, undefined);

    } catch (error) {
        log('Getting Restro By Id' + error, LOGS_LEVEL.ERROR);
        response_helper.error(res, error, error.code ? error.code : 404, 'Getting Restro By Id');
    }
};

module.exports.save_restaurants = save_restaurants;
module.exports.get_all_restaurant = get_all_restaurant;
module.exports.delete_restaurants = delete_restaurants;
module.exports.update_restaurant = update_restaurant;
module.exports.get_restaurant_by_id = get_restaurant_by_id;