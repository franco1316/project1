const { Sequelize } = require("sequelize");

const db = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "franco1316",
  database: "bAcademlo",
  logging: false,
  dialectOptions: {
    useUTC: false,
  },
  timezone: "-05:00",
});

module.exports = { db };
