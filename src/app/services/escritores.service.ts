import { Injectable } from '@angular/core';
import { ESCRITORES } from '../db/escritores.db';
import { Escritor } from '../models/escritor.model';

@Injectable({
  providedIn: 'root'
})
export class EscritoresService {


  constructor() { 

  }

  listEscritores():Promise<Escritor[]>{
    return new Promise((resolve, reject)=> resolve(ESCRITORES));
    
  }

  paisesEscritor():Promise<string[]>{
    let paises:string[] = [];
    return new Promise((resolve, reject)=>{
        ESCRITORES.forEach((element)=>{
            if(paises.indexOf(element.pais) == -1){
              paises.push(element.pais);
            }
        })

      resolve(paises);
    })
  }

  filtraPorPais(pais:string):Promise<Escritor[]>{
    return new Promise((resolve, reject)=>{
      if(pais == 'Todos'){
        resolve(ESCRITORES);
      }else{
        let escritorPorPais:Escritor[] = ESCRITORES.filter(element=>element.pais == pais);
        resolve(escritorPorPais);
      }
      
    })
    
    
  }
}
