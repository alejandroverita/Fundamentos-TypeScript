/* En TypeScript se puede definir una variable con multiple tipos de datos: Union Type
 * - Se usa el simbolo de pipe ('|') entre los tipos
 */

export {};

// 10, '10'
let iDUser: number | string;
iDUser = 10;
iDUser = '10';
// Buscar username dado un ID
function getUsernameByID(id: number | string) {
    // logica de negocio, find the user
    return 'luixaviles';
}

getUsernameByID(20);
getUsernameByID('20');

/* Alias de Tipos: El alias se puede aplicar tambien a un conjunto o combinacion de tipos */
// alias de tipos: TS
type IdUser = number | string;
type Username = string;
let idUser: IdUser;
idUser = 10;
idUser = '10';

// Buscar username dado un ID
function getUsernameByID2(id: IdUser): Username {
    // logica de negocio, find the user
    return 'luixaviles';
}

getUsernameByID2(20);
getUsernameByID2('20');

/* Tipos literales */
// 100x100, 500x500, 1000x1000
type SquareSize = '100x100' | '500x500' | '1000x1000';   // string | number
// let smallPicture: SquareSize = '200x200'; // --> Error
let smallPicture: SquareSize = '100x100';
let mediumPicture: SquareSize = '500x500';