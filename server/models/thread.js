
module.exports = function(sequelize, DataTypes) {
 
    var Threads = sequelize.define('thread', {
 
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
        models.thread.belongsTo(models.board,{as:"board"});
        models.thread.belongsTo(models.user,{as:"op"});
        models.thread.belongsTo(models.image,{as:"picture"});
    }
    return Threads;
 
}