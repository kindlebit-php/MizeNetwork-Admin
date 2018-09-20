const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//module.exports = (request, reply) => {

const PacksSchema = Schema({
  pack_id:{type: String},
  package_name:{type: String},
  value:{type: String},
  quotas: {type: String},
  bonus: {type: String},
  status: {type: String},
  crdate: {type: Date, default: Date.now},
});

const Packs = mongoose.model('Packs', PacksSchema,'packs');
module.exports = Packs;
//return News;
//}

