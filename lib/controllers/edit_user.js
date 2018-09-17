'use strict';
const Joi = require('joi');

//const Models = require('../models/');
const vvalidate = {
		    firstname: Joi.string().required(),
            lastname: Joi.string().required(),
};
const Users = require('../models/users');
module.exports = (request, reply) => {
	 var userID= request.params.slug;
	 if(request.payload){
	 	console.log(request.payload);
	 	if(!request.payload.active){
	 		var values = {
				first_name: request.payload.firstname,
				last_name: request.payload.lastname,
				emailID: request.payload.email,
    		};
    		var msg= "<div class='alert alert-success'>Successfully Udate!</div>";
	 	}else{
    		var values = {
				active:"0"
    		};
	 		var msg= "<div class='alert alert-success'> Two-Step Authentication reseted.</div>";
    	}

	 	// Joi.validate(values, vvalidate, function (err, value) { 
	 		
	 	// });

	 	
		
    	return Users.updateOne({ _id:userID}, { $set: values}).exec().then((users) => {
    		return Users.findById(userID).exec().then((users) => {
		        return reply.view('user_form', {
		              data: users,
		              err:msg,
		              title: 'Edit User | MizeNetwork ',
		              message: 'Hello Pug!'
		        });
	        });

	    }).catch((err) => {
	        console.log(err);
	        return "<div class='alert alert-danger'>"+err+"</div>";

	    });

	}else{
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
	}

     
};
