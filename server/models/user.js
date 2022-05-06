const { DataTypes } = require("sequelize");
const { db } = require("../utils/database");

const User = db.define("user", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: true,
    type: DataTypes.INTEGER,
  },

  name: {
    type: DataTypes.STRING,
    unique: true,
  },

  accountNumber: {
    type: DataTypes.STRING,
  },

  password: {
    type: DataTypes.STRING,
  },

  amount: {
    type: DataTypes.STRING,
  },

  status: {
    type: DataTypes.STRING,
    defaultValue: "able",
  },
});

module.exports = { User };
