import { RouterModule, Routes } from '@angular/router';

import { IntroComponent } from './components/bienvenida/intro.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { CalculatorComponent } from './components/calculator/calculator.component';

const app_routes: Routes = [
    { path: 'intro', component: IntroComponent },
    { path: 'bienvenida', component: BienvenidaComponent },
    { path: 'calculadora', component: CalculatorComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'intro'}
];

export const app_routing = RouterModule.forRoot(app_routes);