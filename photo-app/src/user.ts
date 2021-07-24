import { Album } from "./album";


export class User {
	private album: Album[];

	constructor(private id: number, private username: string, private firstName: string, private isPro: boolean) {
		this.album = [];
	}

	addAlbum(album: Album) {
		this.album.push(album);
	}

	removeAlbum(album: Album): Album | undefined {
        //Buscar Album
        const index = this.album.findIndex(a => a.id === album.id);//compara el identificador del objeto. Si tenemos el mismo identificador significa que tenemos la posicion de dicho objeto en el arreglo
		let deletedAlbum;

		if(index >= 0) {
			deletedAlbum = this.album[index] //accedemos a la referencia album via la posicion
			this.album.splice(index,1)//permite eliminar uno o varios elementos de nuestro arreglo
		}

		return deletedAlbum;
	}
}