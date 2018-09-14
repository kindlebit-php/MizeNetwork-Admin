const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//module.exports = (request, reply) => {

const OrderSchema = Schema({
  user_id:{type: String},
  order_id:{type: String},
  plan_id:{type: String},
  product_name: {type: String},
  product_id: {type: String},
  txn_id: {type: String},
  send_to_address: {type: String},
  send_by_address: {type: String},
  amount: {type: String},
  amount_in_euro: {type: String},
  payment_status: {type: String},
  id_status: {type: String},
  order_date_payment: {type: Date, default: Date.now},
});

const Orders = mongoose.model('Orders', OrderSchema,'orders');
module.exports = Orders;
//return News;
//}

