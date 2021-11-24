import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnInit, OnDestroy {
  subs: Subscription = new Subscription();

  constructor() {
    this.subs = this.observ_function().subscribe(
      (contador) => console.log('observando', contador),
      (error) => console.error('ha ocurrido un error', error),
      () => console.log('el observable terminó')
    );
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  observ_function(): Observable<any> {
    return new Observable((observable: Subscriber<any>) => {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador++;
        let salida = {
          valor: contador,
        };

        observable.next(salida);

        // if (contador == 3) {
        //   clearInterval(intervalo);
        //   observable.complete();
        // }
        // if (contador==2){
        //   //clearInterval(intervalo);
        //    observable.error('Ayudaaaa');

        // }
      }, 1000);
    }).pipe(
      map((resp) => resp.valor),

      filter((valor, index) => {
        if (valor % 2 == 1) {
          //impar
          return true;
        } else {
          //par
          return false;
        }
      })
    );
  }
}
