import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [],
})
export class PromesasComponent implements OnInit {
  constructor() {
   

    this.contar_tres().then(
      mensaje=>console.log("Promesa Terminada", mensaje)
      )
    .catch(
      error=>console.error("ocurrió un error",error)
      );
    
    
  }

  ngOnInit(){}

  contar_tres(): Promise<string> {
   return new Promise((resolve, reject) => {
      let contador = 0;

     let intervalo= setInterval(() => {
        contador++;
        console.log(contador);
        if (contador == 3) {
          resolve('ok');
          //reject('error mio');
          clearInterval(intervalo);
        }
      },1000);
    });

  }
}
