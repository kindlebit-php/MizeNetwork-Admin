'use strict';

const Hapi = require('hapi');
const Hoek = require('hoek');
const Path = require('path');
const Settings = require('./settings');
const Routes = require('./lib/routes');
const Models = require('./lib/models/');

var Bcrypt = require('bcrypt');
//var Basic = require('hapi-auth-basic');//const server = new Hapi.Server();
console.log(Settings.port);
var hapi_auth_cookie = require('hapi-auth-cookie');
const Handlebars = require('handlebars');
const Helper = require('./lib/helper/helper');/**(math,compate,equal)**/

var helpers = require('handlebars-helpers');
//server.connection({ port: Settings.port });
const Vision = require('vision');
const Inert = require('inert');

const Pug = require('pug');
const server = new Hapi.Server({ port: 3000, host: 'localhost' });


const init = async () => {

    //await server.register(require('inert'));
    
    await server.register([hapi_auth_cookie,Vision,Inert]);
    // Set our strategy
    const cache = server.cache({ segment: 'sessions', expiresIn: 3 * 24 * 60 * 60 * 1000 });
    server.app.cache = cache;

    server.auth.strategy('session', 'cookie', {
        password: 'password-should-be-32-characters',
        cookie: 'sid-example',
        redirectTo: '/login',
        isSecure: false,
        validateFunc: async (request, session) => {

            const cached = await cache.get(session.sid);
            const out = {
                valid: !!cached
            };

            if (out.valid) {
                out.credentials = cached.account;
            }

            return out;
        }
    });

    server.auth.default('session');

    server.views({
        engines: { html: Handlebars },//engines: { pug: Pug },
        relativeTo: __dirname,
        path: 'lib/views',
        // compileOptions: {
        //     pretty: false
        // },
        layout: 'layout',
        layoutPath: 'lib/views/layout',
        partialsPath: 'lib/views/partials',
        isCached: Settings.env === 'production'
    });

    //server.route({ method: 'GET', path: '/', handler: rootHandler });

    await server.start();
    server.route(Routes);
    console.log('Server running at:', server.info.uri);
};
process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
