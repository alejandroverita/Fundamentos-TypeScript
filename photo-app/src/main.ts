//Punto de entrada para el proyecto

import { Album } from "./album";
import { PhotoOrientation } from "./photo-orientation";
import { Picture } from "./picture";
import { User } from "./user";

// import { User, Album, Picture, PhotoOrientation } from "./photo-app";

const user = new User(1, 'Luisalejandro', 'Luis', true);

const album = new Album(10, 'Plazi Pictures');

const picture = new Picture(1, 'Familiar picture', '1991/12/21', PhotoOrientation.Square);

//Creamos relacines entre los objetos

user.addAlbum(album);

album.addPicture(picture);

console.table(user);

//Borramos album
user.removeAlbum(album);
console.table(user);

