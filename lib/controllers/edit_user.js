'use strict';
const Joi = require('joi');
const fetch = require('node-fetch');
const baseURL = 'http://13.59.165.203/api/index.php/';
//const Models = require('../models/');

const MySQL = require('mysql');
const connection = MySQL.createConnection({
     host: 'localhost',
     user: 'root',
     password: 'Lo01Kergvgt5^7uht5fy6!!',
     database: 'mizenetwork'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});
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
				firstname: request.payload.firstname,
				lastname: request.payload.lastname,
				email: request.payload.email,
				user_id: request.payload.user_id,
    		};
    		var msg= "<div class='alert alert-success'>Successfully Udate!</div>";
	 	}else{
    		var values = {
				active:"0",
				user_id: request.payload.user_id
    		};
	 		var msg= "<div class='alert alert-success'> Two-Step Authentication reseted.</div>";
    	}

	 	// Joi.validate(values, vvalidate, function (err, value) { 
	 		
	 	// });

	 	return fetch(baseURL+'user/updateprofile', { 
	    method: 'POST',
	    body:    JSON.stringify(values),
	    headers: { 'Content-Type': 'application/json' },
	    }).then(res => res.json())
	    .then((json) => {  
	      console.log(json.error);console.log(json)
	      if(json.error==0){
	        const userinfo= json.body;
	         console.log(json.msg);
	            return reply.view('user_form', {
	              data: userinfo,
	              err: msg,
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
    	/*return Users.updateOne({ _id:userID}, { $set: values}).exec().then((users) => {
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

	    });*/

	}else{
	 	//return Users.findById(userID).exec().then((users) => {
	        // return reply.view('user_form', {
	        //       data: users,
	        //       title: 'Edit User | MizeNetwork ',
	        //       message: 'Hello Pug!'
	        // });
	       
	    return fetch(baseURL+'user/userinfo/'+userID, { 
	    method: 'GET',
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
