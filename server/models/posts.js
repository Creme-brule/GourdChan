
module.exports = function(sequelize, DataTypes) {
 
    var Posts = sequelize.define('post', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        title: {
            type: DataTypes.STRING
        },
        text: {
            type:DataTypes.STRING
        },
        status: {
            type: DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
    });
    Posts.associate = function(models) {
        models.post.belongsTo(models.thread,{as:"thread"});
        models.post.belongsTo(models.user,{as:"op"});
        models.post.hasOne(models.image,{as:"picture"});
    }
    return Posts;
 
}