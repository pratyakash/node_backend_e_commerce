const { db } = require('../models');
const { find_all, save, delete_data, update } = require('../dal');
const response_helper = require('../utils/res.helper');
const { log } = require('../utils/log');
const { LOGS_LEVEL } = require('../utils/constants');


const get_all_product_by_restaurant_id = async(req, res) => {
    try {

        const { query } = req;
        const { id } = query;
        
        const where = {
            is_active: 1,
            restaurant_id: id
        };

        const all_products = await find_all(db.product, where);

        response_helper.success(res, 200, all_products, 'Fetch Successful', undefined, undefined);

    } catch (error) {
        log('Getting Products' + error, LOGS_LEVEL.ERROR);
        response_helper.error(res, error, error.code ? error.code : 404, 'Getting All Products');
    }
};


const save_product = async(req, res) => {
    try {
        const { body } = req;
        const { product } = body;

        const saved_restaurant = await save(db.product, product);
        
        response_helper.success(res, 200, saved_restaurant, 'Saved Successful', undefined, undefined);
    } catch (error) {
        log('Saving Product' + error, LOGS_LEVEL.ERROR);
        response_helper.error(res, error, error.code ? error.code : 404, 'Saving Product');
    }
};


const update_product = async(req, res) => {
    try {
        const { body } = req;
        const { product } = body;

        const saved_product = await update(db.product, product);
        
        response_helper.success(res, 200, saved_product, 'Update Successful', undefined, undefined);
    } catch (error) {
        log('Update Product' + error, LOGS_LEVEL.ERROR);
        response_helper.error(res, error, error.code ? error.code : 404, 'Saving Product');
    }
};


const delete_product = async(req, res) => {
    try {
        const { query } = req;
        const { id } = query;

        await delete_data(db.product, id);

        response_helper.success(res, 200, {}, 'Delete Successful', undefined, undefined);
        
    } catch (error) {
        log('Deleting Product' + error, LOGS_LEVEL.ERROR);
        response_helper.error(res, error, error.code ? error.code : 404, 'Deleting Product');
    }
};


const get_product_by_id = async(req, res) => {
    try {
        
        const where = {
            is_active: 1
        };

        const all_restaurant = await find_all(db.product, where);

        response_helper.success(res, 200, all_restaurant, 'Fetch Successful', undefined, undefined);

    } catch (error) {
        log('Getting Product By Id' + error, LOGS_LEVEL.ERROR);
        response_helper.error(res, error, error.code ? error.code : 404, 'Getting Product By Id');
    }
};

module.exports.save_product = save_product;
module.exports.get_all_product_by_restaurant_id = get_all_product_by_restaurant_id;
module.exports.delete_product = delete_product;
module.exports.update_product = update_product;
module.exports.get_product_by_id = get_product_by_id;