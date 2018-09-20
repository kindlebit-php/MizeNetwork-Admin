
'use strict';
const bcrypt = require('bcrypt-nodejs')
const News = require('../models/news');
module.exports = {
  getdetail: async(request, reply) => {
    var userID= request.params.slug;
      return News.findOne( {user_id:userID} ).exec().then((order) => {
          return reply.view('order', {
                data: order,
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

  return News.create(values).then((users) => {
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
  
  return News.deleteMany().exec().then((users) => {
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
  
  return News.insertMany([{"create_by":"Admin","title":"This title for testing ","description":"This description for testing ","attachment":null,"is_publish":"1","publish_date":"2018-08-13","create_date":"2018-08-13 15:45:59"}, {"create_by":"Admin","title":"test title","description":"test content test","attachment":null,"is_publish":"0","publish_date":"2018-08-14","create_date":"2018-08-14 15:39:14"}]).then((users) => {
       console.log(users);
        return News.find({}).exec().then((order) => {
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
