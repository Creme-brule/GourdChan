module.exports = function(sequelize, DataTypes) {
 
    var Categories = sequelize.define('category', {
 
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
    Categories.associate = function(models) {
        Categories.hasMany(models.board,{as:"subs"});
    }
    return Categories;
 
}