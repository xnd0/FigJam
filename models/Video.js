const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Video extends Model {}

Video.init(
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
        modelName: 'video'
    }
)

module.exports = Video;
