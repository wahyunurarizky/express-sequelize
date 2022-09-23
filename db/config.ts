import {Sequelize} from "sequelize"

const sequelizeConnection = new Sequelize("sequelize-express", "postgres", "1234", {
    host: "localhost",
    dialect: "postgres"
})

export default sequelizeConnection
