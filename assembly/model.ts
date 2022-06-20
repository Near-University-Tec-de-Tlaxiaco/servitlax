import {PersistentVector, u128, context} from "near-sdk-as";

export class comentario{
    titulo : String;
    descripcion : String
    calificacion : i32;
    constructor(titulo : String, descripcion : String, calificacion : i32){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.calificacion = calificacion;
    }
}

export class usuario{
    usuario: String;
    nombre : String;
    apellido: String;
    wallet : String;
    trabajo : String;
    constructor(usuario:String, nombre:String,  apellido:String, wallet:String, trabajo:String){
        this.usuario= usuario;
        this.nombre= nombre;
        this.apellido= apellido;
        this.wallet= wallet;
        this.trabajo= trabajo;
    }
}

export class clientes{
    nombre : String;
    profesion : String;
    telefono : Number;
    trabajos : String;
    constructor(nombre:String,  profesion:String, telefono:number, trabajos:String){
        this.nombre=nombre;
        this.profesion=profesion;
        this.telefono = telefono;
        this.trabajos=trabajos;
    }
}
export class pagos{
    presupuesto:String;
    tipopago:String;
    constructor(presupuesto:string, tipopago:string){
        this.presupuesto=presupuesto;
        this.tipopago=tipopago;
    }
}


export const guardarcomentario = new PersistentVector<comentario>("v");
export const guardarusuario = new PersistentVector<usuario>("v");
export const guardarclientes = new PersistentVector<clientes>("v");
export const guardarpago=new PersistentVector<pagos>("V");