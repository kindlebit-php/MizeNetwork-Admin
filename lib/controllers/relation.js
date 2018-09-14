'use strict';

//const Models = require('../models/');

module.exports = (request, reply) => {
 
     return reply.view('relation', {
        title: 'Relation | MizeNetwork ',
        message: 'Hello Pug!'
      });
     
};
