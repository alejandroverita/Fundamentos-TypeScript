export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

//get y set

class Picture {
    //Propiedades
    private _id: number; //a partir de ts 3.8 se puede poner 'private ' como private
    private _title: string;
    private _orientation: PhotoOrientation;

    constructor(id: number, 
               title: string, 
               orientation: PhotoOrientation){
        this._id = id;
        this._title= title;
        this._orientation = orientation;

    }

    get id () {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get title() {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
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


class Album {
    private _id: number;  
    private _title: string;
    private pictures: Picture[];

    constructor(id: number, title: string){
        this._id = id;
        this._title = title;
        this.pictures = []; //inicializamos para que la estructura este lista para recibir objetos mas adelantes
    }

    addPicture(picture: Picture) {
        this.pictures.push(picture) //accediendo a la propiedad pictures
    }

    get id () {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get title () {
        return this._title;
    }

    set title(title: string){
        this._title = title;
    }
}

const album: Album  = new Album (1, 'Personal Pictures');
const picture: Picture = new Picture(1, 'Plazi Session', PhotoOrientation.Square);

album.addPicture(picture);

console.log('Album', album);

// Accediendo a los miembros publicos
console.log('Id', picture.id); //get id() 
picture.id= 100; //private typescript invoca set id (100)
picture.title = 'Another title'; //private

album.title = 'Personal Activities'; //Private
console.log('Album', album);
