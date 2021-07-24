"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, username, firstName, isPro) {
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.isPro = isPro;
        this.album = [];
    }
    addAlbum(album) {
        this.album.push(album);
    }
    removeAlbum(album) {
        //Buscar Album
        const index = this.album.findIndex(a => a.id === album.id); //compara el identificador del objeto. Si tenemos el mismo identificador significa que tenemos la posicion de dicho objeto en el arreglo
        let deletedAlbum;
        if (index >= 0) {
            deletedAlbum = this.album[index]; //accedemos a la referencia album via la posicion
            this.album.splice(index, 1); //permite eliminar uno o varios elementos de nuestro arreglo
        }
        return deletedAlbum;
    }
}
exports.User = User;
