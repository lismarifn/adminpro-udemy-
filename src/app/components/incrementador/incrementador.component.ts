import { Component, Input, Output, OnInit, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [],
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef = new ElementRef(null);
  
  @Input() leyenda: string = 'Leyenda';
  @Input() porcentaje: number = 50;
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    }

  ngOnInit(): void {
  }
  cambiar_valor(valor: number) {
    if (this.porcentaje <= 0 && valor < 0) {
      this.porcentaje = 0;
    }else{
    if (this.porcentaje >= 100 && valor > 0) {
      this.porcentaje = 100;
    }else{
      this.porcentaje = this.porcentaje + valor;
    }}
    this.cambioValor.emit(this.porcentaje);
    
    this.txtProgress.nativeElement.focus();

  }

  onChange(valor: number) {
    console.log(valor);

    if (valor > 100) {
      this.porcentaje = 100;
    } else {
      if (valor < 0 || valor == null) {
        this.porcentaje = 0;
      } else {
        this.porcentaje=valor;
      }
    }
    this.txtProgress.nativeElement.value = this.porcentaje;
    this.cambioValor.emit(this.porcentaje);
  }
}
