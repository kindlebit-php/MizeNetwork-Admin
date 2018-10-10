
'use strict';
const bcrypt = require('bcrypt-nodejs')
const fetch = require('node-fetch');
const baseURL = 'http://13.59.165.203/api/index.php/';
module.exports = {
  sentinvitation: async(request, reply) => {
    if(request.payload){
    return fetch(baseURL+'user/sendinvitation/', { 
      method: 'GET',
      //body:    JSON.stringify(values),
      headers: { 'Content-Type': 'application/json' },
      }).then(res => res.json())
      .then((json) => {  
        console.log(json.error);console.log(json)
        if(json.error==0){
          const userinfo= json.body;
           console.log(json.msg);
              return reply.view('invite', {
                data: userinfo,
                title: 'User bonus  | MizeNetwork ',
                message: 'Hello Pug!'
              });

        }else{
              console.log(json.msg);
              return reply.view('invite', {
                err: json.msg,
                title: 'User bonus  | MizeNetwork ',
                message: 'Hello Pug!'
              });
        }

      });
    }else{
      return reply.view('invite', {
                data: 'userinfo',
                title: 'User bonus  | MizeNetwork ',
                message: 'Hello Pug!'
              });
    }
     
}


};
