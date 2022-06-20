import { PersistentUnorderedMap, logging } from "near-sdk-as";
import {guardarcomentario, comentario ,guardarusuario, usuario, guardarclientes, clientes, guardarpago, pagos} from "./model"

export const coment = new PersistentUnorderedMap<string, string>("comentario");

const indcomentario = guardarcomentario.length;

//Método para guardar comentarios
export function setcomentario(titulo : String, descripcion : String, calificacion: i32): comentario {
    const newcomen = new comentario(titulo, descripcion, calificacion);
    guardarcomentario.push(newcomen);
    logging.log("Nuevo comentario agregado");
    return newcomen;
}



//Método para borrar comentarios
export function deleteComentario(comentarioIndice : i32): bool{
    if(guardarcomentario.length < comentarioIndice) {
        logging.log('El comentario no existe.');
        return false;
    }
    guardarcomentario.swap_remove(comentarioIndice);
    logging.log('Comentario eliminado.');
    return true;
}


//Método para buscar comentarios
export function getcomentario(Buscar: String): comentario {
    const data = new Array<comentario>(indcomentario);
    for(let i = 0; i < indcomentario; i++) {
        data[i] = guardarcomentario[i];
        if (data[i].titulo==Buscar) {
            return guardarcomentario[i];
        }
    }
    logging.log("No se encontro el comentario")
    return guardarcomentario[indcomentario+2];
}
