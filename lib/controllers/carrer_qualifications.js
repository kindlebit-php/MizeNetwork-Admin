
'use strict';
const bcrypt = require('bcrypt-nodejs')
const fetch = require('node-fetch');
const baseURL = 'http://13.59.165.203/api/index.php/';

const Career = require('../models/career');
module.exports = {
  create: async(request, reply) => {
 	
     return fetch(baseURL+'user/careerinfo/', { 
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      }).then(res => res.json())
      .then((json) => {  
        console.log(json.error);console.log(json)
        if(json.error==0){
          const userinfo= json.body;
           console.log(json.msg);
              return reply.view('carrer-qualifications', {
                data: userinfo,
                err: json.msg,
                title: 'Carrer qualifications | MizeNetwork ',
                message: 'Hello Pug!'
              });

        }else{
              console.log(json.msg);
              return reply.view('carrer-qualifications', {
                err: json.msg,
                title: 'Carrer qualifications | MizeNetwork ',
                message: 'Hello Pug!'
              });
        }

      }); 
  
     
},read: async(request, reply) => {
 
  
  const values = {
      username: request.payload.username,
    };
    console.log(request.payload.password);


  return Career.findOne( {username:request.payload.username} ).exec().then((users) => {
      if(users){
      var passwordhash =users.password
      const u_id =users._id;
      console.log(u_id);
      const verifypass = bcrypt.compareSync(request.payload.password,passwordhash);
      console.log(verifypass);
       if(verifypass){
        const uid = String(u_id);
        const sid = String(++uuid);
        const userdata = { sid:sid,username:users.username,uid:u_id,role:users.role};
        
        request.server.app.cache.set(sid,userdata, 0);
        request.cookieAuth.set(userdata);
        return reply.redirect('/');
      }else{
        console.log("password not match");
        return reply.view('login', {
              err: "password does not match",
              title: 'User Login | MizeNetwork ',
              message: 'Hello Pug!'
        },{ layout: false });
        //return { err: "password not match" };
      }
    }else{
        console.log("Invalid username/password");
        return reply.view('login', {
              err: "Invalid username/password",
              title: 'User Login | MizeNetwork ',
              message: 'Hello Pug!'
        },{ layout: false });
        //return { err: "password not match" };
      }
    }).catch((err) => {
        console.log(err);
         return reply.view('login', {
              err: err,
              title: 'User Login | MizeNetwork ',
              message: 'Hello Pug!'
        },{ layout: false });

    });
  
     
},
add: (request, reply) => {
   var hash = bcrypt.hashSync("12345678");
  const values = 
     {
    _1d :'5b98f57b6ea0fa26eae4c95d',
    first_name : 'admin',
    last_name : 'admin',
    username: 'kbs',
    emailID: 'kbs@yopmail.com',
    dob: '1-10-1233',sponsor:'',
    password:hash,
    phone :'',
    skype :'',
    facebook: '',
    addr1: '',
    addr2: '',
    city: '',
    state: '',
    whatsapp :'',
    country :'',
    postalCode :'',
    role :'admin',
    ewallet: '',
    };
    
   // console.log(values);

  return Career.create(values).then((users) => {
       console.log(users);
        return reply.view('login', {
              data: users,
              title: 'User Login | MizeNetwork ',
              message: 'Hello Pug!'
        },{ layout: false });

    }).catch((err) => {
        console.log(err);
        return { err: err };

    });
  
  
     
},deleteall: (request, reply) => {
  
  return Career.deleteMany().exec().then((users) => {
       console.log(users);
        return reply.view('login', {
              data: users,
              title: 'User Login | MizeNetwork ',
              message: 'Hello Pug!'
        },{ layout: false });

    }).catch((err) => {
        console.log(err);
        return { err: err };

    });
  
  
     
},
import: (request, reply) => {
  
  return Career.insertMany().then((users) => {
       console.log(users);
        return Career.find({}).exec().then((career) => {
        return reply.view('carrer-qualifications', {
              data: career,
              title: 'Carrer qualifications | MizeNetwork ',
        });

	    }).catch((err) => {
	        console.log(err);
	        return { err: err };

	    });

    }).catch((err) => {
        console.log(err);
        return { err: err };

    });
  
  
     
}
};
