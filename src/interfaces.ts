// FUNCION PARA MOSTRAR UNA FOTOGRAFIA
export {}; //Separa el contexto de los archivos anteriores con el contexto actual 
enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

interface Picture {
    title: string;
    date:string;
    orientation: PhotoOrientation;
}

function showPicture(picture:Picture)
    {
    console.log(`Title: ${picture.title} 
                  Date: ${picture.date} 
                  Orientation: ${picture.orientation}`);
}

let myPic = {
    title: 'Test Title',
    date: '2020-03',
    orientation: PhotoOrientation.Landscape
};

showPicture(myPic);

showPicture({
    title: 'Test Titleeee',
    date: '2020-03',
    orientation: PhotoOrientation.Portrait,
    // extra: 'test'//Error
});


interface PictureConfig {
    title?: string;
    date?: string;
    orientation?: PhotoOrientation;
}

function generatePicture (config: PictureConfig){
    const pic = {
        title: 'Default',
        date: '2020-03',

    };

    if(config.title) {
        //Si nos llega el parametro titulo, lo vamos a usr para la generaciond e nuetro objeto
        pic.title = config.title;
    }

    if(config.date) {
        pic.date = config.date;
    }

    return pic
}

let picture = generatePicture({})
console.log('Picture', picture)
picture = generatePicture({title:'Travel Pic'})
console.log('Picture', picture);

//Interfaz usuario: 
interface User {
    readonly id: number; //solo lectura, no modificable
    username: string;
    isPro: boolean;
}

let user: User;
user = {
    id: 10,
    username: 'Alejandro',
    isPro: true,
};
console.log('User', user);

user.username = 'Paparazzi';

// user.id = 9; //Error!
console.log('User', user);