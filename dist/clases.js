"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
class Picture {
    constructor(id, title, orientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }
    //Comportamiento
    toString() {
        return `[id: ${this.id},
                 title: ${this.title},
                 orientation: ${this.orientation}]`;
    }
}
class Album {
    constructor(id, title) {
        this.id = id;
        this.title = title;
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
//Accediendo a los miembros publicos
picture.id = 2; //public
picture.title = 'Another title'; //public
album.title = 'Personal Activities';
console.log('Album', album);
