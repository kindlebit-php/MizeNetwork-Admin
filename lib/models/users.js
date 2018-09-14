const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//module.exports = (request, reply) => {

const Userschema = Schema({
  _id: {type: String},
  image: {type: String},
  kit_name:{type: String},
  ip_address:{type: String},
  first_name: {type: String, required: false},
  last_name: {type: String, required: false},
  username: {type: String, unique: true, lowercase: true, required: true},
  emailID: {type: String, lowercase: true, required: false},
  password: {type: String, required: false},
  dob: {type: String, required: false},
  address: {
    addr1: String,
    addr2: String,
    city: String,
    state: String,
    country: String,
    postalCode: String
  },
  sponsor: {type: String},
  products: [{type: Schema.Types.ObjectId, ref: 'Packs'}],
  network: [{type: Schema.Types.ObjectId, ref: 'Users' ,default: ''}],
  phone: {type: String},
  whatsapp: {type: String},
  skype: {type: String},
  facebook: {type: String},
  genre:{type: String},
  is_admin:{type: String, default: 0},
  role: {type: String, default: 'user'},
  ewallet: {type: String, required: false},
  prefer_legs_binary: {type: String, default: 'M'},
  account_balance: {type: Number, default: 0},
  account_balance_drawee: {type: Number, default: 0},
  total_earning_shares: {type: Number, default: 0},
  total_investments_earnings: {type: Number, default: 0},
  total_investments: {type: Number, default: 0},
  total_earnings: {type: Number, default: 0},
  total_earnings_network: {type: Number, default: 0},
  account_balance_earnings_today: {type: Number, default: 0.00000000},
  key_binary: {type: String, default: 'M'},
  left_points: {type: Number, default: 0},
  right_points: {type: Number, default: 0},
  points_level: {type: Number, default: 0},
  points_to_next_level: {type: Number, default: 50.00},
  percent_to_next_level: {type: Number, default: 0},
  next_level: {type: String},
  binary: {
    qualified: {type: Boolean},
    count_sponsored: {type: String},
    count_left: {type: Number, default: 0},
    count_right: {type: Number, default: 0},
    percent: {type: Number, default: 0}
  },
  affiliates: {
    active: {type: Number, default: 0},
    inactive: {type: Number, default: 0}
  },
  automatic_withdrawal_value: {type: Number, default: 50.00},
      verified_documents: {type: Boolean, default: false},
      powernode_current_tokens_balance: {type: Number, default: 0.00000000},
      powernode_tokens: {type: Number, default: 0.00},
      powernode_bonus_tokens: {type: Number, default: 0.00},
      powernode_balance: {
        fon_balance: {type: Number, default: 0.00000000},
        btc_balance: {type: Number, default: 0.00000000},
        ltc_balance: {type: Number, default: 0.00000000},
        eth_balance: {type: Number, default: 0.00000000}
      },
  pack_active: {type: Schema.Types.ObjectId, ref: 'Packs', default: '5b663ec0f30447554a4512c8'},
  active: {type: Boolean, required: false, default: true},
  createdAt: {type: Date, default: Date.now},
  reset_password_token: { type: String },
  reset_password_expires: {type: Date }
});

const Users = mongoose.model('Users', Userschema,'users_info');
module.exports = Users;
//return News;
//}

