const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Videos extends Model {}

Videos.init(
    {
       songs:{
            type: DataTypes.STRING,
            primaryKey: true,
            autoIncrement: true
        },
        artists:{
            type: DataTypes.STRING
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'song'
    }
)

module.exports = Videogit ;