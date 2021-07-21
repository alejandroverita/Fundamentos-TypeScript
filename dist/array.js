"use strict";
//Corchetes []
//Tipo Explicito
var users;
users = ['Alejnadro', 'Vera', 'Hernandez'];
// users = [1, true, 'Luis']; //Error
// Tipo inferido 
var otherUsers = ['Alejnadro', 'Vera', 'Hernandez']; //infiere que es un array de strings
// users = [1, true, 'Luis']; //Error
// Array<TIPO>
var picturesTitle;
picturesTitle = ['Landscape', 'Favorite sunset', 'Vacation time'];
//Accediendo a los valores de un array
console.log('First user', users[0]);
console.log('First picture', picturesTitle[1]);
//Propiedades de Array
console.log('users.lenght', users.length); //Output: users.lenght 3
//Uso de funciones de Array
users.push('Luuisillo');
users.sort();
console.log('user', users); //Output: user [ 'Alejnadro', 'Hernandez', 'Luuisillo', 'Vera' ]
