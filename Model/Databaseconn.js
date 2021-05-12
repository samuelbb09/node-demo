const Sequelize = require("sequelize");
const sequelize = new Sequelize("basedeprueba","root","", {host: "localhost",dialect: "mysql"});
global.conn = sequelize;