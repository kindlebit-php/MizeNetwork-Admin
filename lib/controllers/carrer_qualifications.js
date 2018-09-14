
'use strict';
const bcrypt = require('bcrypt-nodejs')
const Career = require('../models/career');
module.exports = {
  create: async(request, reply) => {
 	return Career.find({}).exec().then((career) => {
        return reply.view('carrer-qualifications', {
              data: career,
              title: 'Carrer qualifications | MizeNetwork ',
        });

    }).catch((err) => {
        console.log(err);
        return { err: err };

    });
  
     
},read: async(request, reply) => {
 
  
  const values = {
      username: request.payload.username,
    };
    console.log(request.payload.password);


  return Career.findOne( {username:request.payload.username} ).exec().then((users) => {
      if(users){
      var passwordhash =users.password
      const u_id =users._id;
      console.log(u_id);
      const verifypass = bcrypt.compareSync(request.payload.password,passwordhash);
      console.log(verifypass);
       if(verifypass){
        const uid = String(u_id);
        const sid = String(++uuid);
        const userdata = { sid:sid,username:users.username,uid:u_id,role:users.role};
        
        request.server.app.cache.set(sid,userdata, 0);
        request.cookieAuth.set(userdata);
        return reply.redirect('/');
      }else{
        console.log("password not match");
        return reply.view('login', {
              err: "password does not match",
              title: 'User Login | MizeNetwork ',
              message: 'Hello Pug!'
        },{ layout: false });
        //return { err: "password not match" };
      }
    }else{
        console.log("Invalid username/password");
        return reply.view('login', {
              err: "Invalid username/password",
              title: 'User Login | MizeNetwork ',
              message: 'Hello Pug!'
        },{ layout: false });
        //return { err: "password not match" };
      }
    }).catch((err) => {
        console.log(err);
         return reply.view('login', {
              err: err,
              title: 'User Login | MizeNetwork ',
              message: 'Hello Pug!'
        },{ layout: false });

    });
  
     
},
add: (request, reply) => {
   var hash = bcrypt.hashSync("12345678");
  const values = 
     {
    _1d :'5b98f57b6ea0fa26eae4c95d',
    first_name : 'admin',
    last_name : 'admin',
    username: 'kbs',
    emailID: 'kbs@yopmail.com',
    dob: '1-10-1233',sponsor:'',
    password:hash,
    phone :'',
    skype :'',
    facebook: '',
    addr1: '',
    addr2: '',
    city: '',
    state: '',
    whatsapp :'',
    country :'',
    postalCode :'',
    role :'admin',
    ewallet: '',
    };
    
   // console.log(values);

  return Career.create(values).then((users) => {
       console.log(users);
        return reply.view('login', {
              data: users,
              title: 'User Login | MizeNetwork ',
              message: 'Hello Pug!'
        },{ layout: false });

    }).catch((err) => {
        console.log(err);
        return { err: err };

    });
  
  
     
},deleteall: (request, reply) => {
  
  return Career.deleteMany().exec().then((users) => {
       console.log(users);
        return reply.view('login', {
              data: users,
              title: 'User Login | MizeNetwork ',
              message: 'Hello Pug!'
        },{ layout: false });

    }).catch((err) => {
        console.log(err);
        return { err: err };

    });
  
  
     
},
import: (request, reply) => {
  
  return Career.insertMany([{"_id":"104","user_id":"7596","fullname":"valeria raphael kibate","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"unitedafrica","country_name":"tanzania, united republic of","date_qualification":"2018-09-01 18:11:15"}, {"_id":"105","user_id":"5678","fullname":"simon esogu","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"payafrica","country_name":"uganda","date_qualification":"2018-08-31 17:13:50"}, {"_id":"106","user_id":"6","fullname":"Marco Jacuzzi","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"brother","country_name":null,"date_qualification":"2018-08-30 20:53:45"}, {"_id":"107","user_id":"6640","fullname":"aljon leal","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"btcleverage6","country_name":"philippines","date_qualification":"2018-08-30 16:15:06"}, {"_id":"108","user_id":"7433","fullname":"friday peter enemali","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"gingerp","country_name":"nigeria","date_qualification":"2018-08-28 22:35:21"}, {"_id":"109","user_id":"6513","fullname":"jonel javellana","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"bitcoinphilippines","country_name":"philippines","date_qualification":"2018-08-28 07:10:31"}, {"_id":"110","user_id":"7416","fullname":"mustafa ssebyala","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"coachmustafa","country_name":"uganda","date_qualification":"2018-08-25 15:52:25"}, {"_id":"111","user_id":"2625","fullname":"monica quintero","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"exitoforever","country_name":"spain","date_qualification":"2018-08-21 11:54:20"}, {"_id":"112","user_id":"4131","fullname":"mike weber","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"mweber","country_name":"united states","date_qualification":"2018-08-15 03:14:28"}, {"_id":"113","user_id":"3844","fullname":"parveen dewan","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"Falcon007","country_name":"india","date_qualification":"2018-08-11 14:01:31"}, {"_id":"114","user_id":"3420","fullname":"rajneesh sharma","qualification_bonus":"4500.00","qualification_name":"Silver","username":"rockstar","country_name":"india","date_qualification":"2018-08-11 13:48:58"}, {"_id":"115","user_id":"2627","fullname":"Philanthro Vest, LLC","qualification_bonus":"15000.00","qualification_name":"Gold","username":"currencyking","country_name":"portugal","date_qualification":"2018-08-06 08:31:53"}, {"_id":"116","user_id":"4904","fullname":"scott nelson","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"miningmillions","country_name":"united states","date_qualification":"2018-07-30 21:06:09"}, {"_id":"117","user_id":"3112","fullname":"alessio paparella","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"ale74","country_name":"italy","date_qualification":"2018-07-30 11:54:12"}, {"_id":"118","user_id":"3136","fullname":"karl walker","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"kwcrypto","country_name":"mauritius","date_qualification":"2018-07-27 16:37:28"}, {"_id":"119","user_id":"4322","fullname":"shohan bowala","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"btcexchange","country_name":"australia","date_qualification":"2018-07-27 04:16:36"}, {"_id":"120","user_id":"3256","fullname":"lisa holt","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"lisaandwes","country_name":"united arab emirates","date_qualification":"2018-07-19 13:28:42"}, {"_id":"121","user_id":"156","fullname":"pedro resende","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"pedro","country_name":null,"date_qualification":"2018-07-03 21:05:01"}, {"_id":"122","user_id":"3420","fullname":"rajneesh sharma","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"rockstar","country_name":"india","date_qualification":"2018-06-30 23:10:01"}, {"_id":"123","user_id":"3070","fullname":"lee oshea","qualification_bonus":"4500.00","qualification_name":"Silver","username":"aideno","country_name":"united kingdom","date_qualification":"2018-06-19 13:45:13"}, {"_id":"124","user_id":"129","fullname":"angelo moreira","qualification_bonus":"15000.00","qualification_name":"Gold","username":"amoreira","country_name":null,"date_qualification":"2018-06-16 20:25:01"}, {"_id":"125","user_id":"2850","fullname":"ant\u00f3nio manuel marques do vale","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"amarques","country_name":"portugal","date_qualification":"2018-06-16 00:25:01"}, {"_id":"126","user_id":"3","fullname":"yourself mize","qualification_bonus":"30000.00","qualification_name":"Platinum","username":"yourself","country_name":null,"date_qualification":"2018-06-15 18:40:01"}, {"_id":"127","user_id":"2841","fullname":"jean loup veron","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"norev","country_name":"france","date_qualification":"2018-06-14 17:35:01"}, {"_id":"128","user_id":"2627","fullname":"Philanthro Vest, LLC","qualification_bonus":"4500.00","qualification_name":"Silver","username":"currencyking","country_name":"portugal","date_qualification":"2018-06-14 15:20:01"}, {"_id":"129","user_id":"3071","fullname":"oli ahmed","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"ahmed304","country_name":"united kingdom","date_qualification":"2018-06-14 15:20:01"}, {"_id":"130","user_id":"1562","fullname":"Carlos Cesar da Costa Coelho","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"fcoelho","country_name":"portugal","date_qualification":"2018-06-12 22:46:47"}, {"_id":"131","user_id":"3047","fullname":"helena da fonseca","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"leninha","country_name":"portugal","date_qualification":"2018-06-09 20:35:01"}, {"_id":"132","user_id":"139","fullname":"simao relvas","qualification_bonus":"4500.00","qualification_name":"Silver","username":"officialmizers","country_name":null,"date_qualification":"2018-06-09 12:45:01"}, {"_id":"133","user_id":"1214","fullname":"tomas terenas","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"tterenas1","country_name":null,"date_qualification":"2018-06-08 15:55:01"}, {"_id":"134","user_id":"2313","fullname":"luis peinado escudero","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"barrancon1986","country_name":"spain","date_qualification":"2018-06-08 12:20:01"}, {"_id":"135","user_id":"132","fullname":"jose costa","qualification_bonus":"4500.00","qualification_name":"Silver","username":"lagarto","country_name":null,"date_qualification":"2018-06-05 19:15:02"}, {"_id":"136","user_id":"3070","fullname":"lee oshea","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"aideno","country_name":"united kingdom","date_qualification":"2018-06-03 15:15:02"}, {"_id":"137","user_id":"2778","fullname":"annie gallecier","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"debrian51","country_name":"spain","date_qualification":"2018-06-01 20:55:01"}, {"_id":"138","user_id":"2627","fullname":"Philanthro Vest, LLC","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"currencyking","country_name":"portugal","date_qualification":"2018-06-01 18:15:01"}, {"_id":"139","user_id":"1","fullname":"mize network","qualification_bonus":"75000.00","qualification_name":"Diamond","username":"mize","country_name":null,"date_qualification":"2018-05-30 12:30:01"}, {"_id":"140","user_id":"2847","fullname":"maria da concei\u00e7\u00e3o dos santos barg\u00e3o saraiva","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"msaraiva","country_name":"portugal","date_qualification":"2018-05-29 09:40:01"}, {"_id":"141","user_id":"1486","fullname":"lucia ferreira","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"grupo6","country_name":"portugal","date_qualification":"2018-05-27 00:50:01"}, {"_id":"142","user_id":"139","fullname":"simao relvas","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"officialmizers","country_name":null,"date_qualification":"2018-05-25 18:25:01"}, {"_id":"143","user_id":"275","fullname":"jos\u00e9 vieira","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"vieira","country_name":null,"date_qualification":"2018-05-24 23:15:01"}, {"_id":"144","user_id":"129","fullname":"angelo moreira","qualification_bonus":"4500.00","qualification_name":"Silver","username":"amoreira","country_name":null,"date_qualification":"2018-05-24 16:15:01"}, {"_id":"145","user_id":"109","fullname":"marco jaime","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"mjaime","country_name":null,"date_qualification":"2018-05-22 08:25:01"}, {"_id":"146","user_id":"4","fullname":"Adrian Jacuzzi","qualification_bonus":"30000.00","qualification_name":"Platinum","username":"globalmaster","country_name":null,"date_qualification":"2018-05-21 17:50:01"}, {"_id":"147","user_id":"1149","fullname":"rui silva","qualification_bonus":"4500.00","qualification_name":"Silver","username":"ruidasilva","country_name":null,"date_qualification":"2018-05-20 20:25:01"}, {"_id":"148","user_id":"2133","fullname":"Patricia Jaime","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"patyjaime1","country_name":"brazil","date_qualification":"2018-05-20 10:00:01"}, {"_id":"149","user_id":"103","fullname":"claudiomiro machado","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"bitcoinmize","country_name":null,"date_qualification":"2018-05-14 12:35:01"}, {"_id":"150","user_id":"146","fullname":"Paulo Alves","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"panda","country_name":null,"date_qualification":"2018-05-11 19:25:01"}, {"_id":"151","user_id":"366","fullname":"maria teresa barros","qualification_bonus":"15000.00","qualification_name":"Gold","username":"mtbarross","country_name":null,"date_qualification":"2018-04-24 21:45:01"}, {"_id":"152","user_id":"113","fullname":"mario dias","qualification_bonus":"4500.00","qualification_name":"Silver","username":"newteam","country_name":null,"date_qualification":"2018-04-16 20:15:01"}, {"_id":"153","user_id":"367","fullname":"Fernando Silva","qualification_bonus":"15000.00","qualification_name":"Gold","username":"fsmilionario","country_name":null,"date_qualification":"2018-04-16 03:20:02"}, {"_id":"154","user_id":"405","fullname":"maria arminda cunha","qualification_bonus":"4500.00","qualification_name":"Silver","username":"mami","country_name":null,"date_qualification":"2018-04-13 14:55:01"}, {"_id":"155","user_id":"497","fullname":"maria manuela barros carvalho","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"nela1","country_name":null,"date_qualification":"2018-04-12 13:50:01"}, {"_id":"156","user_id":"36","fullname":"maria sanchez mayor","qualification_bonus":"4500.00","qualification_name":"Silver","username":"mariabcn","country_name":null,"date_qualification":"2018-03-20 20:10:01"}, {"_id":"157","user_id":"1358","fullname":"maria franco","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"GuardianAngel","country_name":"portugal","date_qualification":"2018-03-16 08:35:01"}, {"_id":"158","user_id":"32","fullname":"goncalo batista","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"algharbteam","country_name":null,"date_qualification":"2018-03-02 00:05:01"}, {"_id":"159","user_id":"80","fullname":"encarna gallego perez","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"libertad","country_name":null,"date_qualification":"2018-02-22 11:25:01"}, {"_id":"160","user_id":"31","fullname":"jesus roca","qualification_bonus":"4500.00","qualification_name":"Silver","username":"jesus","country_name":null,"date_qualification":"2018-02-21 13:25:01"}, {"_id":"161","user_id":"824","fullname":"eugenio henriques","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"perola","country_name":null,"date_qualification":"2018-02-19 21:20:01"}, {"_id":"162","user_id":"143","fullname":"raphael castro","qualification_bonus":"4500.00","qualification_name":"Silver","username":"smartinvest","country_name":null,"date_qualification":"2018-02-15 21:20:02"}, {"_id":"163","user_id":"3","fullname":"yourself mize","qualification_bonus":"15000.00","qualification_name":"Gold","username":"yourself","country_name":null,"date_qualification":"2018-02-15 16:40:01"}, {"_id":"164","user_id":"36","fullname":"maria sanchez mayor","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"mariabcn","country_name":null,"date_qualification":"2018-02-15 16:40:01"}, {"_id":"165","user_id":"75","fullname":"carlos samuel melian clemente","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"carsam","country_name":null,"date_qualification":"2018-02-09 18:35:01"}, {"_id":"166","user_id":"648","fullname":"alisson zanini","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"agzgroup","country_name":null,"date_qualification":"2018-02-07 22:10:01"}, {"_id":"167","user_id":"15","fullname":"lesther pacheco","qualification_bonus":"4500.00","qualification_name":"Silver","username":"lestherjps","country_name":null,"date_qualification":"2018-02-07 13:10:01"}, {"_id":"168","user_id":"2065","fullname":"klevison matias","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"smartinvest04","country_name":"brazil","date_qualification":"2018-02-06 21:15:01"}, {"_id":"169","user_id":"143","fullname":"raphael castro","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"smartinvest","country_name":null,"date_qualification":"2018-02-06 19:55:01"}, {"_id":"170","user_id":"1","fullname":"mize network","qualification_bonus":"30000.00","qualification_name":"Platinum","username":"mize","country_name":null,"date_qualification":"2018-02-06 15:05:01"}, {"_id":"171","user_id":"650","fullname":"fernando takeuchi","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"grupoprime","country_name":null,"date_qualification":"2018-02-06 02:00:01"}, {"_id":"172","user_id":"2047","fullname":"indira costa","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"smartinvest02","country_name":"brazil","date_qualification":"2018-02-05 21:45:01"}, {"_id":"173","user_id":"764","fullname":"felix pastoriza","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"fenil","country_name":null,"date_qualification":"2018-02-05 21:45:01"}, {"_id":"174","user_id":"4","fullname":"Adrian Jacuzzi","qualification_bonus":"15000.00","qualification_name":"Gold","username":"globalmaster","country_name":null,"date_qualification":"2018-02-05 20:50:01"}, {"_id":"175","user_id":"1151","fullname":"joao cunha","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"joaodacunha","country_name":null,"date_qualification":"2018-02-02 22:20:01"}, {"_id":"176","user_id":"1149","fullname":"rui silva","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"ruidasilva","country_name":null,"date_qualification":"2018-02-02 17:05:01"}, {"_id":"177","user_id":"1680","fullname":"sandra sato zanini","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"primegroup","country_name":"japan","date_qualification":"2018-02-01 00:55:01"}, {"_id":"178","user_id":"29","fullname":"helder santos","qualification_bonus":"4500.00","qualification_name":"Silver","username":"wonderlife","country_name":null,"date_qualification":"2018-01-31 07:25:01"}, {"_id":"179","user_id":"79","fullname":"rui louren\u00e7o","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"mizernet","country_name":null,"date_qualification":"2018-01-29 05:50:01"}, {"_id":"180","user_id":"132","fullname":"jose costa","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"lagarto","country_name":null,"date_qualification":"2018-01-29 01:45:01"}, {"_id":"181","user_id":"411","fullname":"nelson ferreira","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"moneyfreedom","country_name":null,"date_qualification":"2018-01-28 12:45:01"}, {"_id":"182","user_id":"856","fullname":"andre fernandes","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"alpha1","country_name":null,"date_qualification":"2018-01-26 23:00:02"}, {"_id":"183","user_id":"31","fullname":"jesus roca","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"jesus","country_name":null,"date_qualification":"2018-01-26 01:00:01"}, {"_id":"184","user_id":"1699","fullname":"helder aguiar","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"haguiar","country_name":"portugal","date_qualification":"2018-01-25 10:15:01"}, {"_id":"185","user_id":"113","fullname":"mario dias","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"newteam","country_name":null,"date_qualification":"2018-01-24 01:45:01"}, {"_id":"186","user_id":"366","fullname":"maria teresa barros","qualification_bonus":"4500.00","qualification_name":"Silver","username":"mtbarross","country_name":null,"date_qualification":"2018-01-22 11:50:01"}, {"_id":"187","user_id":"405","fullname":"maria arminda cunha","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"mami","country_name":null,"date_qualification":"2018-01-21 14:35:01"}, {"_id":"188","user_id":"129","fullname":"angelo moreira","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"amoreira","country_name":null,"date_qualification":"2018-01-18 16:25:01"}, {"_id":"189","user_id":"1","fullname":"mize network","qualification_bonus":"15000.00","qualification_name":"Gold","username":"mize","country_name":null,"date_qualification":"2018-01-14 17:40:01"}, {"_id":"190","user_id":"1058","fullname":"antonio martins","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"antoniomartins","country_name":null,"date_qualification":"2018-01-13 16:30:02"}, {"_id":"191","user_id":"367","fullname":"Fernando Silva","qualification_bonus":"4500.00","qualification_name":"Silver","username":"fsmilionario","country_name":null,"date_qualification":"2018-01-13 16:30:02"}, {"_id":"192","user_id":"29","fullname":"helder santos","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"wonderlife","country_name":null,"date_qualification":"2018-01-07 07:45:01"}, {"_id":"193","user_id":"676","fullname":"eddie cardona","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"vipcash","country_name":null,"date_qualification":"2018-01-05 21:10:01"}, {"_id":"194","user_id":"3","fullname":"yourself mize","qualification_bonus":"4500.00","qualification_name":"Silver","username":"yourself","country_name":null,"date_qualification":"2018-01-05 09:15:01"}, {"_id":"195","user_id":"725","fullname":"teresa lima","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"teresalima","country_name":null,"date_qualification":"2017-12-31 14:00:01"}, {"_id":"196","user_id":"4","fullname":"Adrian Jacuzzi","qualification_bonus":"4500.00","qualification_name":"Silver","username":"globalmaster","country_name":null,"date_qualification":"2017-12-30 12:50:01"}, {"_id":"197","user_id":"367","fullname":"Fernando Silva","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"fsmilionario","country_name":null,"date_qualification":"2017-12-30 00:15:01"}, {"_id":"198","user_id":"366","fullname":"maria teresa barros","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"mtbarross","country_name":null,"date_qualification":"2017-12-28 21:35:01"}, {"_id":"199","user_id":"15","fullname":"lesther pacheco","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"lestherjps","country_name":null,"date_qualification":"2017-12-28 17:10:01"}, {"_id":"200","user_id":"5","fullname":"Carina Santos","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"cleopatra","country_name":null,"date_qualification":"2017-12-26 19:00:01"}, {"_id":"201","user_id":"1","fullname":"mize network","qualification_bonus":"4500.00","qualification_name":"Silver","username":"mize","country_name":null,"date_qualification":"2017-12-20 15:15:01"}, {"_id":"202","user_id":"3","fullname":"yourself mize","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"yourself","country_name":null,"date_qualification":"2017-12-20 15:15:01"}, {"_id":"203","user_id":"4","fullname":"Adrian Jacuzzi","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"globalmaster","country_name":null,"date_qualification":"2017-12-18 17:30:02"}, {"_id":"204","user_id":"1","fullname":"mize network","qualification_bonus":"1500.00","qualification_name":"Bronze","username":"mize","country_name":null,"date_qualification":"2017-12-12 21:36:55"}]).then((users) => {
       console.log(users);
        return Career.find({}).exec().then((career) => {
        return reply.view('carrer-qualifications', {
              data: career,
              title: 'Carrer qualifications | MizeNetwork ',
        });

	    }).catch((err) => {
	        console.log(err);
	        return { err: err };

	    });

    }).catch((err) => {
        console.log(err);
        return { err: err };

    });
  
  
     
}
};
