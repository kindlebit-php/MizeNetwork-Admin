'use strict';
const Joi = require('joi');
const fetch = require('node-fetch');
const baseURL = 'http://13.59.165.203/api/index.php/';
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
	 	//return Users.findById(userID).exec().then((users) => {
	        // return reply.view('user_form', {
	        //       data: users,
	        //       title: 'Edit User | MizeNetwork ',
	        //       message: 'Hello Pug!'
	        // });
	    return fetch(baseURL+'user/userinfo', { 
	    method: 'POST',
	    body:    JSON.stringify({user_id:userID}),
	    headers: { 'Content-Type': 'application/json' },
	    }).then(res => res.json())
	    .then((json) => {  
	      console.log(json.error);console.log(json)
	      if(json.error==0){
	        const userinfo= json.body;
	         console.log(json.msg);
	            return reply.view('user_form', {
	              data: userinfo,
	              title: 'Edit User | MizeNetwork ',
	              message: 'Hello Pug!'
	            });

	      }else{
	            console.log(json.msg);
	            return reply.view('user_form', {
	              err: json.msg,
	              title: 'Edit User | MizeNetwork ',
	              message: 'Hello Pug!'
	            });
	      }

	    });    
	    // }).catch((err) => {
	    //     console.log(err);
	    //     return { err: err };

	    // });
	}

     
};
