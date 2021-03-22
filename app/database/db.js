const { Sequelize, DataTypes } = require('sequelize');
const config = require('../../config/database')
const db = {}

db.connection = new Sequelize(
  config.database, 
  config.username, 
  config.password, 
  // {
  // host: config.host,
  // dialect: config.dialect
  // }
  config
);

//Vincular nuestros modelos a db
db.User = require('../models/user')(db.connection, DataTypes);
db.Address = require('../models/address')(db.connection, DataTypes);

// Asociar los models
db.User.associate(db)
db.Address.associate(db)

module.exports = db;