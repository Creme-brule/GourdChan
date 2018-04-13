
module.exports = function(sequelize, DataTypes) {
 
    var Posts = sequelize.define('posts', {
 
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
        models.post_status.belongsTo(models.threads,{as:"thread"});
        models.post_status.belongsTo(models.users,{as:"commentor"});
        models.post_status.belongsTo(models.images,{as:"picture"});
    }
    return Posts;
 
}