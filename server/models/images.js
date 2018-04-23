module.exports = function(sequelize, DataTypes) {
  var Images = sequelize.define("image", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    image_url: {
      type: DataTypes.STRING
    }
  });
  Images.associate = function(models) {
    Images.hasOne(models.thread,{as:"thread"});
    Images.hasOne(models.post,{as:"post"});
  }
  return Images;
};
