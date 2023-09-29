// CREATE TABLE user(
// 	id serial primary key,
//   	username varchar(20),
//   	password varchar(100)
// );

const { sequelize } = require("../util/database");
const { DataTypes } = require("sequelize");

module.exports = {
  User: sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false, // not null
      primaryKey: true,
      autoIncrement: true,
    },
    username: DataTypes.STRING({ length: 20 }),
    password: DataTypes.STRING({ length: 100 }),
  }),
};



// create table = .define()
// insert into = .create()
// select * = .findAll()
// etc.