

import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { SettingsService } from '../../services/service.index';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor(  private _ajustes: SettingsService) { }

  ngOnInit(): void {
    this.colocar_check();
  }
cambiar_color(color:string){

  
  this._ajustes.aplicar_tema(color);
  this.colocar_check();
 }

// aplicar_check(link:any){

//   //señala el tema que se está usando
//   let selector: any= document.getElementsByClassName('selector');

//   for(let ref of selector){
//     ref.classList.remove('working');
//   }
//   link.classList.add('working');
// }

colocar_check(){

  //señala el tema que se está usando
  let selector: any= document.getElementsByClassName('selector');
  let tema = this._ajustes.ajuste.tema;

  for(let ref of selector){
   ref.classList.remove('working');
   if(ref.getAttribute('data-theme')==tema){
    ref.classList.add('working');
    }
  }
  
}

}
