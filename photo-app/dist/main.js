"use strict";
//Punto de entrada para el proyecto
Object.defineProperty(exports, "__esModule", { value: true });
const album_1 = require("./album");
const photo_orientation_1 = require("./photo-orientation");
const picture_1 = require("./picture");
const user_1 = require("./user");
// import { User, Album, Picture, PhotoOrientation } from "./photo-app";
const user = new user_1.User(1, 'Luisalejandro', 'Luis', true);
const album = new album_1.Album(10, 'Plazi Pictures');
const picture = new picture_1.Picture(1, 'Familiar picture', '1991/12/21', photo_orientation_1.PhotoOrientation.Square);
//Creamos relacines entre los objetos
user.addAlbum(album);
album.addPicture(picture);
console.table(user);
//Borramos album
user.removeAlbum(album);
console.table(user);
