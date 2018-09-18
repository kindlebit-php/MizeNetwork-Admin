
'use strict';
const bcrypt = require('bcrypt-nodejs')
const Bonus = require('../models/bonus');
module.exports = {
  getdetail: async(request, reply) => {
    var userID= request.params.slug;
      return Bonus.findOne( {user_id:userID} ).exec().then((bonus) => {
          return reply.view('bonus', {
                data: bonus,
                title: 'User bonus | MizeNetwork ',
                message: 'Hello Pug!'
          });

      }).catch((err) => {
          console.log(err);
          return { err: err };

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

  return Bonus.create(values).then((users) => {
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
  
  return Bonus.deleteMany().exec().then((users) => {
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
  
  return Bonus.insertMany().then((users) => {
       console.log(users);
        return Bonus.find({}).exec().then((bonus) => {
        return reply.view('test', {
              data: bonus,
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
