
module.exports = function(sequelize, DataTypes) {
 
    var Users = sequelize.define('user', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
 
        username: {
            type: DataTypes.TEXT
        },
 
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
 
        last_login: {
            type: DataTypes.DATE
        },
 
        status: {
            type: DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
 
    });
    return Users;
 
}