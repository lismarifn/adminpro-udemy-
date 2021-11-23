import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService, SheredService, SidebarService } from './service.index';



@NgModule({
  declarations: [ ],
  imports: [
    CommonModule
  ],
  providers: [SettingsService, SheredService, SidebarService],
})
export class ServiceModule { }
