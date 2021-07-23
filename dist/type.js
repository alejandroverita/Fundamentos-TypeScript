"use strict";
/* En TypeScript se puede definir una variable con multiple tipos de datos: Union Type
 * - Se usa el simbolo de pipe ('|') entre los tipos
 */
Object.defineProperty(exports, "__esModule", { value: true });
// 10, '10'
let iDUser;
iDUser = 10;
iDUser = '10';
// Buscar username dado un ID
function getUsernameByID(id) {
    // logica de negocio, find the user
    return 'luixaviles';
}
getUsernameByID(20);
getUsernameByID('20');
let idUser;
idUser = 10;
idUser = '10';
// Buscar username dado un ID
function getUsernameByID2(id) {
    // logica de negocio, find the user
    return 'luixaviles';
}
getUsernameByID2(20);
getUsernameByID2('20');
// let smallPicture: SquareSize = '200x200'; // --> Error
let smallPicture = '100x100';
let mediumPicture = '500x500';
