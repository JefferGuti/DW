import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio';
import { GaleriaComponent } from './pages/galeria/galeria';
import { DetalleComponent } from './pages/detalle/detalle';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'detalle', component: DetalleComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent }
];
