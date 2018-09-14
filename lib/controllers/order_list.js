'use strict';

//const Models = require('../models/');
const Users = require('../models/users');
module.exports = (request, reply) => {
	 var userID= request.params.slug;
 	return Users.findById(userID).exec().then((users) => {
        return reply.view('user_form', {
              data: users,
              title: 'Edit User | MizeNetwork ',
              message: 'Hello Pug!'
        });

    }).catch((err) => {
        console.log(err);
        return { err: err };

    });

     
};
