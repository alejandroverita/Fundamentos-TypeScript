export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

//Superclase 

abstract class Item { //utilizando abstract no se puede instanciar
    //protected le da el acceso a las subclases
    protected readonly _id: number;
    protected _title: string;

    constructor(id: number, title: string) {
        this._id = id;
        this._title = title;
    }

    get id () {
        return this._id;
    }

   /*  set id(id: number) {
        this._id = id;
    } */

    get title() {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }
}

//get y set

class Picture extends Item {

    public static photoOrientation = PhotoOrientation; 
    //Propiedades
    // private _id: number; //a partir de ts 3.8 se puede poner 'private' como #
    // private _title: string;

    private _orientation: PhotoOrientation;

    public constructor(id: number, 
               title: string, 
               orientation: PhotoOrientation){
        super(id, title); //via la fucnion super estariamos invocando al constructor de la SUPERCLASE
        // this._id = id;
        // this._title= title;
        this._orientation = orientation;

    }

    get orientation() {
        return this._orientation;
    }

    set orientation(orientation:PhotoOrientation) {
        this._orientation = orientation;
    }

    //Comportamiento
    toString(){
        return `[id: ${this._id},
                 title: ${this._title},
                 orientation: ${this._orientation}]`;
    }
}


class Album extends Item{
    // private _id: number;  
    // private _title: string;
    private pictures: Picture[];

    constructor(id: number, title: string){
        super(id, title);
        // this._id = id;
        // this._title = title;
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

// Accediendo a los miembros publicos
console.log('Id', picture.id); //get id() 
// picture.id= 100; //private typescript invoca set id (100)
picture.title = 'Another title'; //private

album.title = 'Personal Activities'; //Private
console.log('Album', album);

console.log('Photo Orientation', Picture.photoOrientation.Panorama);
