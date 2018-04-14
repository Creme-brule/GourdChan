
module.exports = function(sequelize, DataTypes) {
 
    var Boards = sequelize.define('boards', {
 
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
 
        boardname: {
            type: DataTypes.STRING,
            primaryKey:true
        },
 
        board_status: {
            type: DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
 
    });
    return Boards;
 
}