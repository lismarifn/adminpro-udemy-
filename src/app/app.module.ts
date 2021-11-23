import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Rutes
import { APP_ROUTES } from './app.routes';

//Modules
import { PagesModule } from './pages/pages.module';



//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { ServiceModule } from './services/service.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  RegisterComponent
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
