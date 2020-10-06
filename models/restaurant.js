module.exports = (sequelize, DataTypes) => {

    const restaurant = sequelize.define('restaurant', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },

        name: DataTypes.STRING,
        address: DataTypes.STRING,
        photo: DataTypes.STRING,
        weekday_start_time: DataTypes.TIME,
        weekday_end_time: DataTypes.TIME,
        weekend_start_time: DataTypes.TIME,
        weekend_end_time: DataTypes.TIME,

        is_active: DataTypes.BOOLEAN
       
    }, {
        freezeTableName: true, // Model tableName will be the same as the model name
        timestamps: false
    }
    );

    return restaurant;
};