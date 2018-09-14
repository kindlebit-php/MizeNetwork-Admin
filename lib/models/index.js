'use strict';

const Fs = require('fs');
const Path = require('path');
//const Sequelize = require('sequelize');
const Settings = require('../../settings');
const envm= Settings.env;
//const dbSettings = Settings[Settings.env].db;
const mongoose = require('mongoose');
const USER_MONGO=Settings.userMongo;
const PASS_MONGO= Settings.passMongo;
const URL_MONGO= Settings.urlMongo;
/*const sequelize = new Sequelize(dbSettings.database, dbSettings.user, dbSettings.password, dbSettings);
const db = {};

Fs.readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== 'index.js'))
  .forEach((file) => {
    const model = sequelize.import(Path.join(__dirname, file));
    db[model.name] = model;
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;*/

var options = {
  //user:'root',// USER_MONGO,
  //pass: 'root',//PASS_MONGO,
  //useMongoClient: true,
  useNewUrlParser: true
};


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/yourtime',options);//mongodb://ds223509.mlab.com:23509/yourtime

const db = mongoose.connection;
//console.log(db);
db.on('error', (error) => {
  throw error;
});

db.once('open', () => {
  console.log('Connection with database succeeded.');
});
exports.mongoose = mongoose;  
module.exports = db;