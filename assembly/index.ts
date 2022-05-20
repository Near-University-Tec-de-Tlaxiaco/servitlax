import {logging, PersistentUnorderedMap} from "near-sdk-as";
export const comentarios=new  PersistentUnorderedMap<string,string>("Comentarios");
export const reseñas=new  PersistentUnorderedMap<string,string>("Reseñas");
export const comentarios=new  PersistentUnorderedMap<string,string>("Clientes");

    //escritura de comentarios
    export function setComentario (id:string, TituloComentario:string):void{
        comentarios.set(id, TituloComentario);
    }
    //lectura de comentarios
    export function getComentarios(id:string):string|null{
        return comentarios.get(id);
    }
    export function setReseña(id: string, reseña: string): void {
        logging.log("Nueva reseña publicada");
        reseñas.set(id, reseña);
    }
    
    //Método para buscar reseñas
    export function getReseña(id: string): string | null {
        logging.log("Se ha encontrado una reseña");
        return reseñas.get(id);
    }
    
    //Método para borrar reseñas
    export function deleteReseña(id: string): void{
        logging.log("Se ha borrado una reseña");
        reseñas.delete(id);
    }
      //Método para buscar clientes
      export function getClientes(id: string): string | null {
        logging.log("Se ha encontrado el cliente");
        return reseñas.get(id);
    }
    
    //Método para borrar clientes
    export function deleteClientes(id: string): void{
        logging.log("Se ha borrado un cliente");
        reseñas.delete(id);
    }


    