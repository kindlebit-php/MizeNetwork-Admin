
'use strict';
const bcrypt = require('bcrypt-nodejs')
const Order = require('../models/orders');
const fetch = require('node-fetch');
const baseURL = 'http://13.59.165.203/api/index.php/';
module.exports = {
  getdetail: async(request, reply) => {
    var userID= request.params.slug;
     /* return Order.findOne( {user_id:userID} ).exec().then((order) => {
          return reply.view('order', {
                data: order,
                title: 'User bonus | MizeNetwork ',
                message: 'Hello Pug!'
          });

      }).catch((err) => {
          console.log(err);
          return { err: err };

      });*/
  
     return fetch(baseURL+'orders/index/'+userID, { 
      method: 'GET',
      //body:    JSON.stringify(values),
      headers: { 'Content-Type': 'application/json' },
      }).then(res => res.json())
      .then((json) => {  
        console.log(json.error);console.log(json)
        if(json.error==0){
          const userinfo= json.body;
           console.log(json.msg);
              return reply.view('order', {
                data: userinfo,
                title: 'User order  | MizeNetwork ',
                message: 'Hello Pug!'
              });

        }else{
              console.log(json.msg);
              return reply.view('order', {
                err: json.msg,
                title: 'User order  | MizeNetwork ',
                message: 'Hello Pug!'
              });
        }

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

  return Order.create(values).then((users) => {
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
  
  return Order.deleteMany().exec().then((users) => {
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
  
  return Order.insertMany().then((users) => {
       console.log(users);
        return Order.find({}).exec().then((order) => {
        return reply.view('test', {
              data: order,
              title: 'User Bonus | MizeNetwork ',
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
