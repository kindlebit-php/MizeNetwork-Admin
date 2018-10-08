'use strict';
var helpers = require('handlebars-helpers');
var math = helpers.math();
const Path = require('path');
const Note = require('./controllers/note');
const Home = require('./controllers/home');
const Userlist = require('./controllers/userlist');
const Users = require('./controllers/users');
var hapi_auth_cookie = require('hapi-auth-cookie');
const logout = require('./controllers/logout');
const Relation = require('./controllers/relation');
const Relatorio_pg_parceiros = require('./controllers/relatorio_pg_parceiros');
const Carrer_qualifications = require('./controllers/carrer_qualifications');
const Edit = require('./controllers/edit_user');
const Orderlist = require('./controllers/order_list');
const Bonus = require('./controllers/bonus');
const Identity = require('./controllers/identity');
const Order = require('./controllers/order');
const Pack = require('./controllers/pack');
const Newss = require('./controllers/news');
const Course = require('./controllers/course');

const rootHandler = (request, h) => {

    return h.view('login', {
        title: 'Login | Hapi ' + request.server.version,
        message: 'Hello Pug!'
    },{ layout: false });
};


const Gestor_de_Identidade = (request, h) => {

    return h.view('Gestor-de-Identidade', {
        title: 'lib/views | Hapi ',
        message: 'Hello Pug!'
    });
};
module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: Home,
    config: {
      description: 'Gets all the notes available'
    }
  },
  {
    method: 'GET',
    path: '/login',
    options: { handler: Users.create, auth: { mode: 'try' }, plugins: { 'hapi-auth-cookie': { redirectTo: false } } } 
  },
  
  {
    method: 'POST',
    path: '/login',
    options: { handler: Users.read, auth: { mode: 'try',strategy: 'session' }, plugins: { 'hapi-auth-cookie': { redirectTo: true } } } 
  },
   {
    method: 'GET',
    path: '/logout',
    options: { handler: logout, auth: { mode: 'try' }, plugins: { 'hapi-auth-cookie': { redirectTo: true } } } 
  },
{
    method: 'GET',
    path: '/loginu',
    handler: Users.add,
    config: {
      description: 'Gets all the notes available'
    }
  },
  {
    method:'GET',
    path:'/userinfo',
    handler:Users.deleteall,
  },
  {
    method: 'GET',
    path: '/userlist',
    handler: Userlist,
    config: {
      description: 'Gets all the notes available'
    }
  },{
    method: 'GET',
    path: '/importuser',
    handler: Newss.import,
    config: {
      description: 'import bonus data in database'
    }
  },{
    method: ['GET','POST'],
    path: '/user/edit/{slug}',
    handler: Edit,
       
  },
{
    method: 'GET',
    path: '/courselist',
    handler: Course.courselist,
    config: {
      description: 'Gets all the order available'
    }
  },
{
    method: 'GET',
    path: '/course/detail/{slug}',
    handler: Course.coursedetail,
    config: {
      description: 'Gets all the order available'
    }
  },
  {
    method: ['GET','POST'],
    path: '/add_course',
    handler: Course.create_course,
    config: {
      description: 'Gets all the order available'
    }
  },
  {
    method: ['GET','POST'],
    path: '/course/edit/{slug}',
    handler: Course.update_course,
    config: {
      description: 'Gets all the order available'
    }
  }, 
  {
    method: 'GET',
    path: '/course/del/{slug}',
    handler: Course.delete_course,
    config: {
      description: 'Gets all the order available'
    }
  },
   {
    method: ['GET','POST'],
    path: '/add_course_list/{slug}',
    handler: Course.create_course_list,
    config: {
      description: 'Gets all the order available'
    }
  }, {
    method: ['GET','POST'],
    path: '/courselist/edit/{slug}',
    handler: Course.update_course_list,
    config: {
      description: 'Gets all the order available'
    }
  }, 
  {
    method: 'GET',
    path: '/courselist/del/{slug}/{course_id}',
    handler: Course.delete_course_list,
    config: {
      description: 'Gets all the order available'
    }
  },
  {
    method: 'GET',
    path: '/user/order/{slug}',
    handler: Order.getdetail,
    config: {
      description: 'Gets all the order available'
    }
  },{
    method: 'GET',
    path: '/importorder',
    handler: Order.import,
    config: {
      description: 'Gets all the order available'
    }
  },
  {
    method: 'GET',
    path: '/relation',
    handler: Relation,
    config: {
      description: 'Gets all the notes available'
    }
  },{
    method: 'GET',
    path: '/relatorio-pg-parceiros',
    handler: Relatorio_pg_parceiros,
    config: {
      description: 'Gets all the notes available'
    }
  },{
    method: 'GET',
    path: '/carrer-qualifications',
    handler: Carrer_qualifications.create,
    config: {
      description: 'Gets all the notes available'
    }
  }
  ,{
    method: 'GET',
    path: '/importbonus',
    handler: Bonus.import,
    config: {
      description: 'import bonus data in database'
    }
  },{
    method: 'GET',
    path: '/user/bonus/{slug}',
    handler: Bonus.getdetail,
    config: {
      description: 'Gets  the Bonus detail'
    }
  },{
    method: 'GET',
    path: '/importidentity',
    handler: Identity.import,
    config: {
      description: 'import Identity data in database'
    }
  },{
    method: ['GET','POST'],
    path: '/passports/list',
    handler: Identity.list,
    config: {
      description: 'Gets  all Identity detail'
    }
  },{
    method: 'GET',
    path: '/Gestor-de-Identidade',
    handler: Gestor_de_Identidade,
    config: {
      description: 'Gets all the notes available'
    }
  },
  {
    method:'GET',
    path:"/top-pack",
    options: { handler: Pack.toppack, auth: { mode: 'optional' }, plugins: { 'hapi-auth-cookie': { redirectTo: false } } } 
  },
  {
    method: 'POST',
    path: '/note',
    handler: Note.create,
    config: {
      description: 'Adds a new note'
    }
  },
  {
    method: 'GET',
    path: '/note/{slug}',
    handler: Note.read,
    config: {
      description: 'Gets the content of a note'
    }
  },
  {
    method: 'PUT',
    path: '/note/{slug}',
    handler: Note.update,
    config: {
      description: 'Updates the selected note'
    }
  },
  {
    method: 'GET',
    path: '/note/{slug}/delete',
    handler: Note.delete,
    config: {
      description: 'Deletes the selected note'
    }
  },
  {
    // Static files
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: Path.join(__dirname, '../static/public')
      }
    },
    config: {
      description: 'Provides static resources'
    }
  }
];
