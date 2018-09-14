const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//module.exports = (request, reply) => {

const BonusSchema = Schema({
  user_id:{type: String},
  bonus_binario:{type: String},
  bonus_indicacao_direta:{type: String},
  bonus_indicacao_indireta: {type: String},
  bonus_matching: {type: String},
  bonus_plano_carreira: {type: String},
  bonus_booster: {type: String},
  bonus_montly: {type: String},
  bonus_super_pool: {type: String},
  date_qualification: {type: Date, default: Date.now},
});

const Bonus = mongoose.model('Bonus', BonusSchema,'bonus');
module.exports = Bonus;
//return News;
//}

