"use strict";
console.log('Hello');
//number
//explicit
let phone;
phone = 1234;
//phone = 'Error' //esto es un error
//inferido 
let phoneNumber = 98987; //asigna por defecto el tipo de dato
//hexadecimal: empieza por 0x
let hex = 0xffffff;
//octal: empieza por 0o;
let octal;
//binario: empieza por 0b
let binary;
//TIPO BOOLEAN
let isPro;
isPro = true;
isPro = false;
//isPro = 1 //Error
//STRINGS EXPLICITOS E IMPLICITOS
let username;
username = 'lavera3';
let lastname = 'vera'; //implicito
// Template String with use of back-tick ``
let userInfo;
userInfo = `
    User info:
    username: ${username}
    firtsname: ${username + ' anbreaker'}
    phone: ${phone}
    isPro: ${isPro}
`;
console.log('userInfo', userInfo);
