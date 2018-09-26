
'use strict';
const fetch = require('node-fetch');

module.exports = (request, reply) => {
    request.cookieAuth.clear();
    fetch('http://13.59.165.203/api/index.php/user/logout', { 
    method: 'POST',
    body:   '',
    headers: { 'Content-Type': 'application/json' },
    }).then(res => res.json())
    .then((json) => {  
      console.log(json)
     
    });
    return reply.redirect('/login');

     
};
