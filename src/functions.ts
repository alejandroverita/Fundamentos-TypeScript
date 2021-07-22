type SquareSize = '100x100' | '500x500' | '1000x1000';

function createPicture(title:string, date: string, size: SquareSize) {
    console.log('Create Picture', title, date, size);
}

createPicture('Fast and Furios', '16/11.97', '1000x1000')

//Parametros opcionales

function createPicture2(title:string, date?: string, size?: SquareSize) { //el interrogacion es un parametro opcional
    console.log('Create Picture', title, date, size);

}

createPicture2("Hola mundo", "99/12/12") //compila sin problemas la ausensia dle terce dato

//Flat array Function 
let createPic = (title: string, date: string, size: SquareSize): object => {
    return { //retorna un objeto json literal
        title, date, size
    };
}

const picture = createPic('Platzi Session', "13/01/98", '100x100');

console.log('Picture', picture);