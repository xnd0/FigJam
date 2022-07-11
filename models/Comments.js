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
        comment_text:{
            type: DataTypes.STRING
        },
        song_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'songs',
                key: 'id',
            },
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