
'use strict';
const bcrypt = require('bcrypt-nodejs')
const Packs = require('../models/packs');
const Users = require('../models/users');
var groupArray = require('group-array');
module.exports = {
  getdetail: async(request, reply) => {
    var userID= request.params.slug;
      return Packs.findOne( {user_id:userID} ).exec().then((order) => {
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

  return Packs.create(values).then((users) => {
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
  
  return Packs.deleteMany().exec().then((users) => {
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

toppack: (request, reply) => {
    return Users.aggregate([
     { "$match": { "packs_info":{ $ne: [] } } },
      {
          "$lookup": {
              "from": "packs",
              "localField": "kit_name",
              "foreignField": "package_name",
              "as": "packs_info"
          }
      },
      { $unwind : "$packs_info" },
      { $sort : { packs_info : -1} },
       // {
       //      $group: {
       //          _id: '$package_name',  //$region is the column name in collection
       //          count: {$sum: 1}
       //      }
       //  }
      {"$group": { _id: "$packs_info",
           }}
    ], function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        //var results=groupArray(result, 'kit_name');
        console.log(result);
    });
 // return Packs.find({}).populate('package_name').exec().then((packs) => {
 //            return reply.view('test', {
 //                  data: packs,
 //                  err:'msg',
 //                  title: 'Gestor de Identidade | MizeNetwork ',
 //                  message: 'Hello Pug!'
 //            });
 //          });

},
import: (request, reply) => {
  
  return Packs.insertMany([{"pack_id":"1","package_name":"Free","value":"0","quotas":"0","bonus":"0","status":"1","crdate":"2018-09-20 18:31:07"}, {"pack_id":"2","package_name":"Light","value":"50","quotas":"0","bonus":"0","status":"1","crdate":"2018-09-20 12:57:58"}, {"pack_id":"3","package_name":"Beginner","value":"250","quotas":"50","bonus":"0","status":"1","crdate":"2018-09-20 12:54:40"}, {"pack_id":"4","package_name":"Starter","value":"500","quotas":"200","bonus":"0","status":"1","crdate":"2018-09-20 12:54:52"}, {"pack_id":"5","package_name":"standard","value":"1000","quotas":"400","bonus":"0","status":"1","crdate":"2018-09-20 12:55:15"}, {"pack_id":"6","package_name":"Extended","value":"2500","quotas":"1000","bonus":"100","status":"1","crdate":"2018-09-20 12:55:30"}, {"pack_id":"7","package_name":"Business","value":"5000","quotas":"2000","bonus":"200","status":"1","crdate":"2018-09-20 12:55:43"}, {"pack_id":"8","package_name":"Primium","value":"10000","quotas":"4000","bonus":"600","status":"1","crdate":"2018-09-20 12:56:06"}, {"pack_id":"9","package_name":"Ultimate","value":"25000","quotas":"10000","bonus":"2000","status":"1","crdate":"2018-09-20 12:56:41"}, {"pack_id":"10","package_name":"PowerNode","value":"25000","quotas":"10000","bonus":"2000","status":"1","crdate":"2018-09-20 12:56:41"}]).then((users) => {
       console.log(users);
        return Packs.find({}).exec().then((order) => {
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
