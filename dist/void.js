"use strict";
//Void
//Tipo explicito
function showInfo(user) {
    console.log('User info', user.id, user.username, user.firstName);
}
showInfo({ id: 1, username: 'alejitovera', firstName: 'Luis' });
//NEVER
function handleError(code, message) {
    //Process your code here
    //Generate a message
    throw new Error(`${message}. Code ${code}`);
}
handleError(404, 'Not found');
