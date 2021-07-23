"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
//Superclase 
class Item {
    constructor(id, title) {
        this._id = id;
        this._title = title;
    }
    get id() {
        return this._id;
    }
    /*  set id(id: number) {
         this._id = id;
     } */
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
}
//get y set
class Picture extends Item {
    constructor(id, title, orientation) {
        super(id, title); //via la fucnion super estariamos invocando al constructor de la SUPERCLASE
        // this._id = id;
        // this._title= title;
        this._orientation = orientation;
    }
    get orientation() {
        return this._orientation;
    }
    set orientation(orientation) {
        this._orientation = orientation;
    }
    //Comportamiento
    toString() {
        return `[id: ${this._id},
                 title: ${this._title},
                 orientation: ${this._orientation}]`;
    }
}
Picture.photoOrientation = PhotoOrientation;
class Album extends Item {
    constructor(id, title) {
        super(id, title);
        // this._id = id;
        // this._title = title;
        this.pictures = []; //inicializamos para que la estructura este lista para recibir objetos mas adelantes
    }
    addPicture(picture) {
        this.pictures.push(picture); //accediendo a la propiedad pictures
    }
}
const album = new Album(1, 'Personal Pictures');
const picture = new Picture(1, 'Plazi Session', PhotoOrientation.Square);
album.addPicture(picture);
console.log('Album', album);
// Accediendo a los miembros publicos
console.log('Id', picture.id); //get id() 
// picture.id= 100; //private typescript invoca set id (100)
picture.title = 'Another title'; //private
album.title = 'Personal Activities'; //Private
console.log('Album', album);
console.log('Photo Orientation', Picture.photoOrientation.Panorama);
