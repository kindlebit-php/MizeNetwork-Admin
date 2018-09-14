const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//module.exports = (request, reply) => {

const NewsSchema = Schema({
  image: {type: String},
  title: {type: String, required: true},
  description: {type: String, required: true},
  date: {type: Date, default: Date.now},
  active: {type: Boolean, default: true}
});

const News = mongoose.model('News', NewsSchema,'news');
module.exports = News;
//return News;
//}

