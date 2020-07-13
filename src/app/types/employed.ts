import { Identifiers } from '@angular/compiler';

export interface Employed {
    _id:string;
    name: string;
    rol: string;
    dni: string;
    password: string;
    puesto: string;
    salario: number;
    horario:string;
    //tarea:any; // añadir array de tareas.
   }