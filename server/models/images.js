module.exports = function(sequelize, DataTypes) {
  var Messages = sequelize.define("threads", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    image_url: {
      type: DataTypes.STRING
    }
  });
  return Messages;
};
