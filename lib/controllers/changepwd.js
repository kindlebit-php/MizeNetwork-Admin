'use strict';
const bcrypt = require('bcrypt-nodejs')
var helpers = require('handlebars-helpers');
var math = helpers.math();
const fetch = require('node-fetch');
const baseURL = 'http://13.59.165.203/api/index.php/';
module.exports = {
  list: async(request, reply) => {
     const session = request.auth.credentials;
   if(request.payload){
    const userID= request.payload.user_id;
    const auth_token= request.payload.auth_token;
    console.log(request.payload);
    
      var msg= "<div class='alert alert-success'>Successfully Update!</div>";
      return fetch(baseURL+'user/change_password/'+auth_token, { 
      method: 'POST',
      body:    JSON.stringify(request.payload),
      headers: { 'Content-Type': 'application/json' },
      }).then(res => res.json())
      .then((json) => {  
        console.log(json.error);//console.log(json)
        if(json.error==0){
          const identity= json.body;
           console.log(json.msg);
              return reply.view('changepwd', {
                data: { uid:session.uid,auth_token:session.auth_token},
                err:"<div class='alert alert-success'>"+json.msg+"</div>",
                title: 'Change Password | MizeNetwork ',
                message: 'Hello Pug!'
              });

        }else{
              console.log(json.msg);
              return reply.view('changepwd', {
                data: { uid:session.uid,auth_token:session.auth_token},
                err: "<div class='alert alert-danger'>"+json.msg+"</div>",
                title: 'Change Password | MizeNetwork ',
                message: 'Hello Pug!'
              });
        }

      });
    }else{ 
     
      console.log(session.uid);
      return reply.view('changepwd', {
          data: { uid:session.uid,auth_token:session.auth_token},
          title: 'Change Password  | MizeNetwork ',
          message: 'Hello Pug!'
      });

       

      }
}
};
