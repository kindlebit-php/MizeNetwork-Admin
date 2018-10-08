'use strict';
//const mongoose = require('mongoose');
const Slugify = require('slug');
const fs = require('fs')
const path = require('path');
//const News = require('../models/note');

const fetch = require('node-fetch');
const baseURL = 'http://13.59.165.203/api/index.php/';
module.exports = (request, reply) => {

     
    return fetch(baseURL+'dashboard', { 
      method: 'GET',
      //body:    JSON.stringify(values),
      headers: { 'Content-Type': 'application/json' },
    }).then(res => res.json())
      .then((json) => {  
        console.log(json.error);console.log(json)
      if(json.error==0){
        const dashboard= json.body;
        console.log(json.msg);
        return reply.view('home', {
              data: dashboard,
              title: 'Dashboard | MizeNetwork ',
              message: 'Hello dashboard!'
        });
      }
    });
    
};
