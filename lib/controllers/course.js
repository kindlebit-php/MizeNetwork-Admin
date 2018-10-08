
'use strict';
const bcrypt = require('bcrypt-nodejs')
const fetch = require('node-fetch');
const baseURL = 'http://13.59.165.203/api/index.php/';
module.exports = {
  courselist: async(request, reply) => {
    
    return fetch(baseURL+'course/index/', { 
      method: 'GET',
      //body:    JSON.stringify(values),
      headers: { 'Content-Type': 'application/json' },
      }).then(res => res.json())
      .then((json) => {  
        console.log(json.error);console.log(json)
        if(json.error==0){
          const userinfo= json.body;
           console.log(json.msg);
              return reply.view('course', {
                data: userinfo,
                title: 'User bonus  | MizeNetwork ',
                message: 'Hello Pug!'
              });

        }else{
              console.log(json.msg);
              return reply.view('bonus', {
                err: json.msg,
                title: 'User bonus  | MizeNetwork ',
                message: 'Hello Pug!'
              });
        }

      });
     
},
coursedetail: (request, reply) => {
  var courseID= request.params.slug;
   return fetch(baseURL+'course/course_detail/'+courseID, { 
      method: 'GET',
      //body:    JSON.stringify(values),
      headers: { 'Content-Type': 'application/json' },
      }).then(res => res.json())
      .then((json) => {  
        console.log(json.error);console.log(json)
        if(json.error==0){
          const userinfo= json.body;
           console.log(json.msg);
              return reply.view('course_detail', {
                data: userinfo,
                courseID:courseID,
                title: 'course detail  | MizeNetwork ',
                message: 'Hello Pug!'
              });

        }else{
              console.log(json.msg);
              return reply.view('bonus', {
                err: json.msg,
                courseID:courseID,
                title: 'User bonus  | MizeNetwork ',
                message: 'Hello Pug!'
              });
        }

      });
  
     
},
create_course: (request, reply) => {
  if(request.payload){
    console.log(request.payload);
    return fetch(baseURL+'course/create_course', { 
      method: 'POST',
      body:    JSON.stringify(request.payload),
      headers: { 'Content-Type': 'application/json' },
      }).then(res => res.json())
      .then((json) => {  
        console.log(json.error);console.log(json)
        if(json.error==0){
          const userinfo= json.body;
           console.log(json.msg);
             return reply.redirect('/courselist');

        }else{
              console.log(json.msg);
              return reply.view('course_add', {
                err: json.msg,
                title: 'User bonus  | MizeNetwork ',
                message: 'Hello Pug!'
              });
        }

    });
  }else{
      return reply.view('course_add', {
                data: '',
                title: 'Course add  | MizeNetwork ',
                message: 'Hello Pug!'
              });
  }
     
},
create_course_list: (request, reply) => {
    var courseID= request.params.slug;
    if(request.payload){
      console.log(request.payload);
      return fetch(baseURL+'course/create_course_list', { 
        method: 'POST',
        body:    JSON.stringify(request.payload),
        headers: { 'Content-Type': 'application/json' },
        }).then(res => res.json())
        .then((json) => {  
          console.log(json.error);console.log(json)
          if(json.error==0){
            const userinfo= json.body;
             console.log(json.msg);
               return reply.redirect('/course/detail/'+courseID);

          }else{
                console.log(json.msg);
                return reply.view('course_add_list', {
                  err: json.msg,
                  data: {id:courseID},
                  title: ' Course  | MizeNetwork ',
                  message: 'Hello Pug!'
                });
          }

    });
  }else{

      return reply.view('course_add_list', {
                data: {id:courseID},
                title: 'Course add List | MizeNetwork ',
                message: 'Hello Pug!'
              });
  }
  
     
} 
,
update_course: (request, reply) => {
    var courseID= request.params.slug;
    if(request.payload){
      console.log(request.payload);
      return fetch(baseURL+'course/update_course', { 
        method: 'POST',
        body:    JSON.stringify(request.payload),
        headers: { 'Content-Type': 'application/json' },
        }).then(res => res.json())
        .then((json) => {  
          console.log(json.error);console.log(json)
          if(json.error==0){
            const userinfo= json.body;
             console.log(json.msg);
               return reply.redirect('/courselist');

          }else{
                console.log(json.msg);
                return reply.view('course_add', {
                  err: json.msg,
                  data: {course_id:courseID},
                  title: ' Course Update | MizeNetwork ',
                  message: 'Hello Pug!'
                });
          }

    });
  }else{

    return fetch(baseURL+'course/get_course_detail/'+courseID, { 
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        }).then(res => res.json())
        .then((json) => {  
            console.log(json.error);console.log(json);
            return reply.view('course_add', {
              data: json.body,
              title: 'Course Update | MizeNetwork ',
              message: 'Hello Pug!'
            });
    });
  }
  
     
},
delete_course: (request, reply) => {
    var courseID= request.params.slug;
    if(courseID){
      return fetch(baseURL+'course/delete_course/'+courseID, { 
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          }).then(res => res.json())
          .then((json) => {  
              console.log(json.error);console.log(json);
              if(json.error==0){
              console.log(json.msg);
              return reply.redirect('/courselist');

          }else{
                console.log(json.msg);
                return reply.view('course', {
                  err: json.msg,
                  data: {course_id:courseID},
                  title: ' Course  | MizeNetwork ',
                  message: 'Hello Pug!'
                });
          }
      });
  }  
}
,
update_course_list: (request, reply) => {
    var courseID= request.params.slug;
    if(request.payload){
      console.log(request.payload);
      return fetch(baseURL+'course/update_course_list', { 
        method: 'POST',
        body:    JSON.stringify(request.payload),
        headers: { 'Content-Type': 'application/json' },
        }).then(res => res.json())
        .then((json) => {  
          console.log(json.body[0].course_id);console.log(json)
          if(json.error==0){
            const userinfo= json.body;
             console.log(json.msg);
               return reply.redirect('/course/detail/'+json.body[0].course_id);

          }else{
                console.log(json.msg);
                return reply.view('course_add_list', {
                  err: json.msg,
                  data: {course_id:courseID},
                  title: ' Update  | MizeNetwork ',
                  message: 'Hello Pug!'
                });
          }

    });
  }else{

    return fetch(baseURL+'course/get_course_list_detail/'+courseID, { 
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        }).then(res => res.json())
        .then((json) => {  
            console.log(json.error);console.log(json);
            return reply.view('course_add_list', {
              data: json.body,
              title: 'Course Update | MizeNetwork ',
              message: 'Hello Pug!'
            });
    });
  }
  
     
},
delete_course_list: (request, reply) => {
    var courseID= request.params.slug;
    var course_id= request.params.course_id;
    if(courseID){
      return fetch(baseURL+'course/delete_course_list/'+courseID, { 
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          }).then(res => res.json())
          .then((json) => {  
              console.log(json.error);console.log(json);
              if(json.error==0){
              console.log(json.msg);
              return reply.redirect('/course/detail/'+course_id);

          }else{
                console.log(json.msg);
                return reply.view('course', {
                  err: json.msg,
                  data: {course_id:courseID},
                  title: ' Course  | MizeNetwork ',
                  message: 'Hello Pug!'
                });
          }
      });
  }  
}
};
