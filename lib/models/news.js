const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//module.exports = (request, reply) => {

const NewsSchema = Schema({
  create_by:{type: String},
  title:{type: String},
  description:{type: String},
  image:{type: String},
  date: {type: Date, default: Date.now},
});

const News = mongoose.model('Newss', NewsSchema,'news');
module.exports = News;
//return News;
//}

