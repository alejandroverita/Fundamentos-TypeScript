"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// <tipo> Angle Brackets
let username;
username = 'alej';
//tenemos una cadena, TS confia en mi!
let message = username.length > 5 ?
    `Welcome ${username}` :
    `Username is too short`;
console.log('Message', message);
let usernameWithId = 'luixaviles 1';
//Como obtener el username?
username = usernameWithId.substring(0, 10);
console.log('Username only,', username);
//Sintaxxis "as"
message = username.length > 5 ?
    `Welcome ${username}` :
    `Username is too short`;
let helloUser;
helloUser = "Holla paparazzi";
message = helloUser.substring(6);
console.log('Message user', message);
