const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
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
                model: 'song',
                key: 'id',
            },
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'comment'
    }
)

module.exports = Comment;