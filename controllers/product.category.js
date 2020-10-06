const { db } = require('../models');
const { find_all, save, delete_data, update } = require('../dal');
const response_helper = require('../utils/res.helper');
const { log } = require('../utils/log');
const { LOGS_LEVEL } = require('../utils/constants');


const get_all_product_category = async(req, res) => {
    try {
        
        const where = {
            is_active: 1
        };

        const product_category = await find_all(db.product_category, where);

        response_helper.success(res, 200, product_category, 'Fetch Successful', undefined, undefined);

    } catch (error) {
        log('Getting Category' + error, LOGS_LEVEL.ERROR);
        response_helper.error(res, error, error.code ? error.code : 404, 'Getting All Category');
    }
};


const save_category = async(req, res) => {
    try {
        const { body } = req;
        const { category } = body;

        const saved_category = await save(db.product_category, category);
        
        response_helper.success(res, 200, saved_category, 'Saved Successful', undefined, undefined);
    } catch (error) {
        log('Saving Category' + error, LOGS_LEVEL.ERROR);
        response_helper.error(res, error, error.code ? error.code : 404, 'Saving Category');
    }
};

const update_category = async(req, res) => {
    try {
        const { body } = req;
        const { category } = body;

        const saved_category = await update(db.product_category, category);
        
        response_helper.success(res, 200, saved_category, 'Update Successful', undefined, undefined);
    } catch (error) {
        log('Updating Category' + error, LOGS_LEVEL.ERROR);
        response_helper.error(res, error, error.code ? error.code : 404, 'Updating Category');
    }
};


module.exports.save_category = save_category;
module.exports.get_all_product_category = get_all_product_category;
module.exports.update_category = update_category;