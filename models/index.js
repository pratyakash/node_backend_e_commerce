const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);

const { DATABASE } = require('../utils/config');
const { LOGS_LEVEL } = require('../utils/constants');
const { log } = require('../utils/log');

const sequelize = new Sequelize(DATABASE);


const db = {};

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        var model = require(path.join(__dirname, file))(sequelize, Sequelize)
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;



(function connect_database() {
    sequelize
    .authenticate()
    .then(() => {
        log('Connection has been established successfully.', LOGS_LEVEL.SUCCESSFUL);
    })
    .catch(error => {
        log('Unable to connect to the database:' + error, LOGS_LEVEL.ERROR);
    });
  
} ());

db.product_category.hasMany(db.product, { as: 'Category', foreignKey: 'product_category_id' })

module.exports.db = db;