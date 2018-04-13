
module.exports = function(sequelize, DataTypes) {
 
    var Threads = sequelize.define('threads', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        thread_title: {
            type: DataTypes.STRING
        },
        thread_text: {
            type:DataTypes.STRING
        },
        thread_score: {
            type: DataTypes.INTEGER
        },
        thread_status: {
            type: DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'active'
        },
        thread_createdat : {
            type: DataTypes.DATE
        }

    });
    Threads.associate = function(models) {
        models.threads.belongsTo(models.boards,{as:"board"});
        models.threads.belongsTo(models.users,{as:"op"});
        models.threads.belongsTo(models.images,{as:"picture"});
    }
    return Threads;
 
}