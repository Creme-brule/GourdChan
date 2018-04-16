
module.exports = function(sequelize, DataTypes) {
 
    var Posts = sequelize.define('post', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        post_title: {
            type: DataTypes.STRING
        },
        post_text: {
            type:DataTypes.STRING
        },
        post_status: {
            type: DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'active'
        },
        post_createdat : {
            type: DataTypes.DATE
        }
    });
    Posts.associate = function(models) {
        models.post.belongsTo(models.thread,{as:"thread"});
        models.post.belongsTo(models.user,{as:"commentor"});
        models.post.belongsTo(models.image,{as:"picture"});
    }
    return Posts;
 
}