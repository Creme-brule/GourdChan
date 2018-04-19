
module.exports = function(sequelize, DataTypes) {
 
    var Boards = sequelize.define('board', {
 
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            primaryKey:true
        },
 
        boardname: {
            type: DataTypes.STRING
        },
 
        status: {
            type: DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
 
    });
    Boards.associate = function(models) {
        Boards.belongsTo(models.category,{as:"category"});
        Boards.hasMany(models.post, {as:"thread"});
    }
    return Boards;
 
}