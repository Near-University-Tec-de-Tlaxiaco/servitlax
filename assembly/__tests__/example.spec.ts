import {logging, PersistentVector} from "near-sdk-as";
import {comentario, guardarcomentario} from "../model"
import {setcomentario, getcomentario, deleteComentario} from ".."

const titulo = 'Buen trabajo';
const descripcion = 'recomiendo a este trabajador';
const calificacion=5;

let newcoment = new comentario(titulo, descripcion, calificacion);

describe("Publicar comentario", () => {
    it('No se publico la reseña debido a un error', () => {
        expect(setcomentario('Esplendido', 'Excelente servicio, nunca habia recibido mejores muebles en mi vida', 9)).toStrictEqual
        (newcoment);
    })
  })

const resñaInd = guardarcomentario.length;
const data = new Array<comentario>(resñaInd);
for(let i=0; i < resñaInd; i++) {
    data[i] = guardarcomentario[i]
}

  describe("Obtener comentario", () => {
    it('No hay comentarios publicados, o hay un error', () => {
        expect(getcomentario()).toStrictEqual(data)
    })
  })
