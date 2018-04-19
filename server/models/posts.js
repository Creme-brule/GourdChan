
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
        thread: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        threadId: {
            type: DataTypes.INTEGER
        },
        status: {
            type: DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
    });
    Posts.associate = function(models) {
        models.post.belongsTo(models.board,{as:"post"});
        models.post.belongsTo(models.user,{as:"commentor"});
        models.post.belongsTo(models.image,{as:"picture"});
    }
    return Posts;
 
}