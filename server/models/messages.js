
module.exports = function(sequelize, DataTypes) {
 
    var Messages = sequelize.define('message', {
 
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
        }

    });
    Messages.associate = function(models) {
        models.message.belongsTo(models.user,{
            foreignKey: "senderId",
            as:"sender"
        });
        models.message.belongsTo(models.user,{
            foreignKey:"receiverID",
            as:"receiver"
        });
    }
    return Messages;
 
}