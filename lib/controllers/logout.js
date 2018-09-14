
'use strict';
module.exports = (request, reply) => {
	request.server.app.cache.drop(request.state['sid'].sid);
    request.cookieAuth.clear();
    return h.redirect('/');

     
};
