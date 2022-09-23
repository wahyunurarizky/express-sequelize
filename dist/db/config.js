"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelizeConnection = new sequelize_1.Sequelize("sequelize-express", "postgres", "1234", {
    host: "localhost",
    dialect: "postgres"
});
exports.default = sequelizeConnection;
