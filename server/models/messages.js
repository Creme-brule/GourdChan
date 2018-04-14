
module.exports = function(sequelize, DataTypes) {
 
    var Messages = sequelize.define('threads', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        message_title: {
            type: DataTypes.STRING
        },
        message_text: {
            type:DataTypes.STRING
        },
        message_createdat : {
            type: DataTypes.DATE
        }

    });
    Messages.associate = function(models) {
        models.threads.belongsTo(models.users,{
            foreignKey: "senderId",
            as:"sender"
        });
        models.threads.belongsTo(models.users,{
            foreignKey:"receiverID",
            as:"receiver"
        });
    }
    return Messages;
 
}