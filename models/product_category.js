module.exports = (sequelize, DataTypes) => {

    const product_category = sequelize.define('product_category', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },

        name: DataTypes.INTEGER,

        is_active: DataTypes.BOOLEAN
       
    }, {
        freezeTableName: true, // Model tableName will be the same as the model name
        timestamps: false
    }
    );

    return product_category;
};