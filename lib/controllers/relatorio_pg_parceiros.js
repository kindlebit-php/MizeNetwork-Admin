'use strict';

//const Models = require('../models/');

module.exports = (request, reply) => {
 
     return reply.view('relatorio-pg-parceiros', {
        title: 'Relatorio pg parceiros | MizeNetwork ',
        message: 'Hello Pug!'
      });
     
};
