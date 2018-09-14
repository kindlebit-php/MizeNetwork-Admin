require('dotenv').config({silent: true});


module.exports = {
  port: process.env.PORT || 3000,
  env: process.env.ENV || 'development',

 //port: process.env.PORT,
 userMongo :process.env.USER_MONGO,
 passMongo: process.env.PASS_MONGO,
 urlMongo: process.env.URL_MONGO,
  // Environment-dependent settings
 /* development: {
    db: {
      dialect: 'sqlite',
      storage: ':memory:'
    }
  },
  production: {
    db: {
      dialect: 'sqlite',
      storage: 'db/database.sqlite'
    }
  }*/
 
};
