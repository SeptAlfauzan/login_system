const { Sequelize } = require("sequelize");
require("dotenv").config();

const DB_NAME = "kriptografi";
const DB_USER = "root";
const DB_PASSWORD = "";

const DB = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: "localhost",
  dialect: "mysql",
});

export default DB;
