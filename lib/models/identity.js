const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//module.exports = (request, reply) => {


const passportsSchema = Schema({
  user_id:{ type: String, ref: 'Users'},
  fileURL:{type: String},
  date_sent:{type: String},
  id_status: {type: String},
  id_type: {type: String},
  type_name: {type: String},
  status_name: {type: String},
  date_qualification: {type: Date, default: Date.now},
});

const Identity = mongoose.model('Identity', passportsSchema,'identity');
module.exports = Identity;
//return News;
//}

