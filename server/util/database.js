const Sequelize = require("sequelize");

const sequelize = new Sequelize("empmangement", "root", "Bb000000", {
  dialect: "mysql",
  host: "localhost"
});



module.exports = sequelize;
