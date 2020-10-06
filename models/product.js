module.exports = (sequelize, DataTypes) => {

    const product = sequelize.define('product', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },

        product_category_id: DataTypes.INTEGER,
        restaurant_id: DataTypes.INTEGER,

        name: DataTypes.STRING,
        price: DataTypes.STRING,
        photo: DataTypes.STRING,
        sale_days: DataTypes.STRING,
        sale_price: DataTypes.STRING,
        sale_description: DataTypes.STRING,

        sale_start_time: DataTypes.TIME,
        sale_end_time: DataTypes.TIME,

        is_active: DataTypes.BOOLEAN
       
    }, {
        freezeTableName: true, // Model tableName will be the same as the model name
        timestamps: false
    }
    );

    return product;
};