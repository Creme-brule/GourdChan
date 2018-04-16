
module.exports = function(sequelize, DataTypes) {
 
    var Categorys = sequelize.define('category', {
 
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            primaryKey:true
        },
 
        categoryname: {
            type: DataTypes.STRING
        },
 
        category_status: {
            type: DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
 
    });
    return Categorys;
 
}