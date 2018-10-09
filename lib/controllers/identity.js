'use strict';
const bcrypt = require('bcrypt-nodejs')
const Identity = require('../models/identity');
var helpers = require('handlebars-helpers');
var math = helpers.math();
const fetch = require('node-fetch');
const baseURL = 'http://13.59.165.203/api/index.php/';
module.exports = {
  list: async(request, reply) => {

   if(request.payload){
    const userID= request.payload.user_id;
    console.log(request.payload);
    if(!request.payload.reject){
      var values = {
        id_status: 3,
        user_id: userID,
        status_name: 'Accepted',
        };
        var msg= "<div class='alert alert-success'>Successfully Update!</div>";
    }else{
        var values = {
          id_status: 4,
          user_id: userID,
          status_name: 'Rejected',
        };
      var msg= "<div class='alert alert-success'>Successfully Update!</div>";
      }

      return fetch(baseURL+'identity/update_status/', { 
      method: 'POST',
      body:    JSON.stringify(values),
      headers: { 'Content-Type': 'application/json' },
      }).then(res => res.json())
      .then((json) => {  
        console.log(json.error);//console.log(json)
        if(json.error==0){
          const identity= json.body;
           console.log(json.msg);
              return reply.view('identity', {
                data: identity,
                err:msg,
                title: 'Gestor de Identidade | MizeNetwork ',
                message: 'Hello Pug!'
              });

        }else{
              console.log(json.msg);
              return reply.view('identity', {
                err: json.msg,
                title: 'Gestor de Identidade | MizeNetwork ',
                message: 'Hello Pug!'
              });
        }

      });
    }else{ 
        return fetch(baseURL+'identity/index/', { 
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      }).then(res => res.json())
      .then((json) => {  
        console.log(json.error);//console.log(json)
        if(json.error==0){
          const identity= json.body;
              return reply.view('identity', {
                data: identity,
                title: 'Gestor de Identidade  | MizeNetwork ',
                message: 'Hello Pug!'
              });

        }else{
              console.log(json.msg);
              return reply.view('identity', {
                err: json.msg,
                title: 'Gestor de Identidade  | MizeNetwork ',
                message: 'Hello Pug!'
              });
        }

      });
     	
      }
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

  return Identity.create(values).then((users) => {
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
  
  return Identity.deleteMany().exec().then((identity) => {
       console.log(identity);
        return reply.view('test', {
              data: identity,
              title: 'Identity | MizeNetwork ',
              message: 'Hello Pug!'
        },{ layout: false });

    }).catch((err) => {
        console.log(err);
        return { err: err };

    });
  
  
     
},
import: (request, reply) => {
  
  return Identity.insertMany().then((identity) => {
       console.log(identity);
        return reply.view('test', {
              data: identity,
              title: 'User Login | MizeNetwork ',
              message: 'Hello Pug!'
        },{ layout: false });

    }).catch((err) => {
        console.log(err);
        return { err: err };

    });
  
  
     
}
};
