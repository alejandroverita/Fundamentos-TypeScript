export {};

// <tipo> Angle Brackets

let username: any;
username = 'alej';

//tenemos una cadena, TS confia en mi!
let message: string = (<string>username).length > 5 ?
                      `Welcome ${username}`:
                      `Username is too short`;
console.log('Message', message);

let usernameWithId: any = 'luixaviles 1';

//Como obtener el username?
username = (<string> usernameWithId).substring(0,10);
console.log('Username only,', username);

//Sintaxxis "as"
message = (username as string).length > 5 ?
                      `Welcome ${username}`:
                      `Username is too short`;

let helloUser: any;
helloUser = "Holla paparazzi";

message = (helloUser as string).substring(6);

console.log('Message user', message);