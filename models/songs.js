const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Songs extends Model {}

Songs.init(
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        song_name:{
            type: DataTypes.STRING
        },
        artist_name:{
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'songs'
    }
)

module.exports = Songs;