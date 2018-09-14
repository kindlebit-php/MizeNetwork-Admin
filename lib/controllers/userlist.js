'use strict';

//const Models = require('../models/');
const Users = require('../models/users');
module.exports = (request, reply) => {
 	return Users.find({}).exec().then((users) => {
        return reply.view('user_list', {
              data: users,
              title: 'User List | MizeNetwork ',
              message: 'Hello Pug!'
        });

    }).catch((err) => {
        console.log(err);
        return { err: err };

    });
    

     /*return reply.view('user_list', {
        title: 'User List | MizeNetwork ',
        message: 'Hello Pug!'
      });*/
     
};
