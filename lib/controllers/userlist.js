'use strict';

const fetch = require('node-fetch');
const baseURL = 'http://13.59.165.203/api/index.php/';
const Users ='';// require('../models/users');
module.exports = (request, reply) => {

  return fetch(baseURL+'user/all_users', { 
    method: 'POST',
    body:    JSON.stringify(request.payload),
    headers: { 'Content-Type': 'application/json' },
    }).then(res => res.json())
    .then((json) => {  

      console.log(json.error);console.log(json)
      if(json.error==0){
        const userinfo= json.body;
         console.log(json.msg);
            return reply.view('user_list', {
              data: userinfo,
              title: 'User List | MizeNetwork ',
              message: 'Hello Pug!'
            });

      }else{
            console.log(json.msg);
            return reply.view('user_list', {
              err: json.msg,
              title: 'User List | MizeNetwork ',
              message: 'Hello Pug!'
            });
      }

    });

  /*
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
    
    */
     /*return reply.view('user_list', {
        title: 'User List | MizeNetwork ',
        message: 'Hello Pug!'
      });*/
     
};
