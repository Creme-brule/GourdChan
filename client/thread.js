/* 
module.exports = function(sequelize, DataTypes) {
 
    var Threads = sequelize.define('thread', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        title: {
            type: DataTypes.STRING
        },
        text: {
            type:DataTypes.STRING
        },
        score: {
            type: DataTypes.INTEGER
        },
        status: {
            type: DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }

    });
    Threads.associate = function(models) {
        models.thread.belongsTo(models.board,{as:"link"});
        models.thread.belongsTo(models.user,{as:"op"});
        models.thread.belongsTo(models.image,{as:"picture"});
    }
    return Threads;
 
} */