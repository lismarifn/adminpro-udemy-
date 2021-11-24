
import { NgModule } from '@angular/core';

//modules
import { SheredModule } from '../shared/shered.modules';
import { FormsModule } from '@angular/forms';

//rutes
import { PAGES_ROUTES } from './pages.routes';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';



//temp
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

import { ChartsModule } from 'ng2-charts';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';



@NgModule({
    declarations: [
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        PagesComponent,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccountSettingsComponent,
        PromesasComponent,
        RxjsComponent
     ],
     exports:[
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        PagesComponent,
     ],
     imports: [
         SheredModule,
         PAGES_ROUTES,
         FormsModule,
         ChartsModule
     ]

})export class PagesModule{}