
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
 
        board_status: {
            type: DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
 
    });
    Boards.associate = function(models) {
        models.board.belongsTo(models.category,{as:"category"});
    }
    return Boards;
 
}