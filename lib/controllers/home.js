'use strict';
const mongoose = require('mongoose');
const Slugify = require('slug');
const fs = require('fs')
const path = require('path');
const News = require('../models/note');


module.exports = (request, reply) => {

     
      return News.find({}).exec().then((news) => {
        return reply.view('home', {
              data: news,
              title: 'Dashboard | MizeNetwork ',
              message: 'Hello Pug!'
        });

      }).catch((err) => {
        console.log(err);
        return { err: err };

      });
    
};
