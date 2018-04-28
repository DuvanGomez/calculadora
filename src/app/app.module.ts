import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { app_routing } from './app.routes';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { DataService} from './services/data.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IntroComponent } from './components/bienvenida/intro.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    NavbarComponent,
    IntroComponent,
    BienvenidaComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    app_routing
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
