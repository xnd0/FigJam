const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Videos extends Model {}

Videos.init(
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        video_link:{
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'videos'
    }
)

module.exports = Videos;