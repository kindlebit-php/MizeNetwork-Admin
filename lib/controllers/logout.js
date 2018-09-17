
'use strict';
module.exports = (request, reply) => {
    request.cookieAuth.clear();
    return reply.redirect('/login');

     
};
