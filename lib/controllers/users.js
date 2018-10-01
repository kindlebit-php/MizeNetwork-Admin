'use strict';
const fetch = require('node-fetch');
const bcrypt = require('bcrypt-nodejs')
//const Models = require('../models/');
const baseURL = 'http://13.59.165.203/api/index.php/';

const Users = require('../models/users');
let uuid = 1;       // Use seq instead of proper unique identifiers for demo only
module.exports = {
  create: async(request, reply) => {
   if (request.auth.isAuthenticated) {
        request.server.log('info', 'user authentication successful')
        const session = request.auth.credentials
        console.log(session);
        return reply.redirect('/');
    }
    
 	//return Users.find({}).exec().then((users) => {
        return reply.view('login', {
              data: '',
              title: 'User Login | MizeNetwork ',
              message: 'Hello Pug!'
        },{ layout: false });

   // }).catch((err) => {
     //   console.log(err);
      //  return { err: err };

    //});
  
     
},read: async(request, reply) => {
 
  console.log(baseURL);
  const values = {
      username: request.payload.username,
    };
    console.log(JSON.stringify(request.payload));
  
    /********** By using API login to user profile**********/
  
    return fetch(baseURL+'login', { 
    method: 'POST',
    body:    JSON.stringify(request.payload),
    headers: { 'Content-Type': 'application/json' },
    }).then(res => res.json())
    .then((json) => {  

      console.log(json.error);console.log(json)
      if(json.error==0){
        const userinfo= json.body;
        const uid = String(userinfo.id);
        const sid = String(++uuid);
        const userdata = { sid:sid,username:userinfo.username,uid:uid,role:userinfo.is_admin};
        request.server.app.cache.set(sid,userdata, 0);
        request.cookieAuth.set(userdata);
        return reply.redirect('/');

      }else{
            console.log(json.msg);
            return reply.view('login', {
              err: json.msg,
              title: 'User Login | MizeNetwork ',
              message: 'Hello Pug!'
            },{ layout: false });
      }

    });
    
  /*return Users.findOne( {username:request.payload.username} ).exec().then((users) => {
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
  */
     
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

  return Users.create(values).then((users) => {
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
 
   // console.log(values);

  /*return Users.deleteMany({role:'user'}).exec().then((users) => {
       console.log(users);
        return reply.view('login', {
              data: users,
              title: 'User Login | MizeNetwork ',
              message: 'Hello Pug!'
        },{ layout: false });

    }).catch((err) => {
        console.log(err);
        return { err: err };

    });*/
   return fetch(baseURL+'user/userinfo/1', { 
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    }).then(res => res.json())
    .then((json) => {  

      console.log(json.error);console.log(json)
      if(json.error==0){
        const userinfo= json.body;
        const uid = String(userinfo.id);
        const sid = String(++uuid);
        const userdata = { sid:sid,username:userinfo.username,uid:uid,role:userinfo.is_admin};
        request.server.app.cache.set(sid,userdata, 0);
        request.cookieAuth.set(userdata);
        //return reply.redirect('/');
         console.log(json.msg);
            return reply.view('test', {
              data: json.body,
              title: 'User Login | MizeNetwork ',
              message: 'Hello Pug!'
            },{ layout: false });
      }else{
            console.log(json.msg);
            return reply.view('test', {
              err: json.msg,
              title: 'User Login | MizeNetwork ',
              message: 'Hello Pug!'
            },{ layout: false });
      }

    });
     
},
import: (request, reply) => {
  const values = 
     {
    name : 'admin istrator',
    username: 'kbs',
    emailID: 'kbs@yopmail.com',
    birthday: '1-10-1233',
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
    ewallet: '2443432423423424',
    createdAt: Date.now() 
    };
  var password = bcrypt.hashSync("12345678");
  return Users.insertMany().then((users) => {
       console.log(users);
        return reply.view('test', {
              data: users,
              title: 'User Login | MizeNetwork ',
              message: 'Hello Pug!'
        },{ layout: false });

    }).catch((err) => {
        console.log(err);
        return { err: err };

    });
  
  
     
}
};
