"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var Picture = /** @class */ (function () {
    function Picture(id, title, orientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }
    //Comportamiento
    Picture.prototype.toString = function () {
        return "[id: " + this.id + ",\n                 title: " + this.title + ",\n                 orientation: " + this.orientation + "]";
    };
    return Picture;
}());
var Album = /** @class */ (function () {
    function Album(id, title) {
        this.id = id;
        this.title = title;
        this.pictures = []; //inicializamos para que la estructura este lista para recibir objetos mas adelantes
    }
    Album.prototype.addPicture = function (picture) {
        this.pictures.push(picture); //accediendo a la propiedad pictures
    };
    return Album;
}());
var album = new Album(1, 'Personal Pictures');
var picture = new Picture(1, 'Plazi Session', PhotoOrientation.Square);
album.addPicture(picture);
console.log('Album', album);
//Accediendo a los miembros publicos
// picture.id= 2; //private
// picture.title = 'Another title'; //private
// album.title = 'Personal Activities'; //Private
console.log('Album', album);
