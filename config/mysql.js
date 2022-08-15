require('dotenv').config();
const { DataSource } = require("typeorm");

const myDataSource = new DataSource({
  type     : process.env.MYSQL_CONNECTION,
  host     : process.env.MYSQL_HOST,
  port     : process.env.MYSQL_PORT,
  username : process.env.MYSQL_USERNAME,
  password : process.env.MYSQL_PASSWORD,
  database : process.env.MYSQL_DATABASE,
});

myDataSource.initialize().then(() => {
  console.log("DataSource has been initialized!");
})

module.exports = {
    myDataSource
}
