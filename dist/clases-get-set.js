"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
//get y set
class Picture {
    constructor(id, title, orientation) {
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
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
class Album {
    constructor(id, title) {
        this._id = id;
        this._title = title;
        this.pictures = []; //inicializamos para que la estructura este lista para recibir objetos mas adelantes
    }
    addPicture(picture) {
        this.pictures.push(picture); //accediendo a la propiedad pictures
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
}
const album = new Album(1, 'Personal Pictures');
const picture = new Picture(1, 'Plazi Session', PhotoOrientation.Square);
album.addPicture(picture);
console.log('Album', album);
// Accediendo a los miembros publicos
console.log('Id', picture.id); //get id() 
picture.id = 100; //private typescript invoca set id (100)
picture.title = 'Another title'; //private
album.title = 'Personal Activities'; //Private
console.log('Album', album);
