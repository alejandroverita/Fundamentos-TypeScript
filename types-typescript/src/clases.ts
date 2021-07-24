export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture {
    //Propiedades
    id: number; 
    title: string;
    orientation: PhotoOrientation;

    constructor(id: number, 
               title: string, 
               orientation: PhotoOrientation){
        this.id = id;
        this.title= title;
        this.orientation = orientation;

    }

    //Comportamiento
    toString(){
        return `[id: ${this.id},
                 title: ${this.title},
                 orientation: ${this.orientation}]`;
    }
}


class Album {
    id: number;
    title: string;
    pictures: Picture[];

    constructor(id: number, title: string){
        this.id = id;
        this.title = title;
        this.pictures = []; //inicializamos para que la estructura este lista para recibir objetos mas adelantes
    }

    addPicture(picture: Picture) {
        this.pictures.push(picture) //accediendo a la propiedad pictures
    }
}

const album: Album  = new Album (1, 'Personal Pictures');
const picture: Picture = new Picture(1, 'Plazi Session', PhotoOrientation.Square);

album.addPicture(picture);

console.log('Album', album);

//Accediendo a los miembros publicos
picture.id= 2; //public
picture.title = 'Another title'; //public

album.title = 'Personal Activities';
console.log('Album', album);
