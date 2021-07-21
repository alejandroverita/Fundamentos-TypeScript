"use strict";
console.log('Hello');
//number
//explicit
var phone;
phone = 1234;
//phone = 'Error' //esto es un error
//inferido 
var phoneNumber = 98987; //asigna por defecto el tipo de dato
//hexadecimal: empieza por 0x
var hex = 0xffffff;
//octal: empieza por 0o;
var octal;
//binario: empieza por 0b
var binary;
//TIPO BOOLEAN
var isPro;
isPro = true;
isPro = false;
//isPro = 1 //Error
//STRINGS EXPLICITOS E IMPLICITOS
var username;
username = 'lavera3';
var lastname = 'vera'; //implicito
// Template String with use of back-tick ``
var userInfo;
userInfo = "\n    User info:\n    username: " + username + "\n    firtsname: " + (username + ' anbreaker') + "\n    phone: " + phone + "\n    isPro: " + isPro + "\n";
console.log('userInfo', userInfo);
