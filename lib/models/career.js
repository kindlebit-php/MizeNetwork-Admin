const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//module.exports = (request, reply) => {
// `user_id`, `fullname`, `qualification_bonus`, `qualification_name`,
//  `username`, `country_name`, `date_qualification` 
const Carrer_qualifications = Schema({
   _id: {type: String},
  user_id:{type: String,},
  fullname:{type: String},
  qualification_bonus:{type: String},
  qualification_name: {type: String},
  username: {type: String},
  country_name: {type: String},
  date_qualification: {type: Date, default: Date.now},
});

const Career = mongoose.model('Career', Carrer_qualifications,'carrer-qualifications');
module.exports = Career;
//return News;
//}

