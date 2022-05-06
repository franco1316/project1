const { DataTypes } = require("sequelize");
const { db } = require("../utils/database");

const Transfer = db.define("transfer", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: true,
    type: DataTypes.INTEGER,
  },

  amount: {
    type: DataTypes.STRING,
  },

  senderUserId: {
    type: DataTypes.INTEGER
  },

  receiverUserId: {
    type: DataTypes.INTEGER,
  },
});

module.exports = { Transfer };
