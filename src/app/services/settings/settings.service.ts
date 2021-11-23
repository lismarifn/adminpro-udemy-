import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajuste: Ajustes={
    temaURL: 'assets/css/colors/default.css',
    tema :'default'
  };

  constructor( @Inject(DOCUMENT) private _document: any) {
  this.cargar_ajuste();
   }

  guardar_ajuste(){
    localStorage.setItem('ajuste',JSON.stringify(this.ajuste));
  }

  cargar_ajuste(){
    let ls_ajuste = localStorage.getItem('ajuste');
    if(ls_ajuste!=null){
      this.ajuste = JSON.parse(ls_ajuste);
    }
      this.aplicar_tema(this.ajuste.tema);
    
  }

  aplicar_tema(tema:string){
    let url= 'assets/css/colors/'+tema+'.css';
    this._document.getElementById('tema').setAttribute('href',url);
    this.ajuste.tema=tema;
    this.ajuste.temaURL=url;
    this.guardar_ajuste();
  }
}

interface Ajustes{
 temaURL:string;
 tema:string;
}
