export {}

//[1,'user']

let user: [number, string];
user = [1, 'aviles'];

console.log('user', user); //Output: user [1, 'aviles']
console.log('username', user[1]); //Output: username aviles
console.log('id', user[0]); //Output: id 1


//Tuplas con varios valores
// id, username, isPro
let userinfo: [number, string, boolean];
userinfo= [9890, 'Karina', true];
console.log('userinfo', userinfo); //Output: user [9890, 'Karina', true]

//Arreglo de tuplas
let array: [number, string][] =[]; //Inicializar el valor para ARRAY
array.push([1, 'julio']);
array.push([2, 'Limones']);
array.push([3, 'Lensqueen']);

console.log('array', array) // Output: array [ [ 1, 'julio' ], [ 2, 'Limones' ], [ 3, 'Lensqueen' ] ]

//Uso de funciones de Arrays

// Lensqueen -> Lensqueen001

array[2][1]= array[2][1].concat('001'); //Lensqueen001
console.log('Array[2][1]', array);