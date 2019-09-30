import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { PersonaComponent } from './persona/persona.component';


const routes: Routes = [
  { path: '', redirectTo: 'listado', pathMatch: 'full' },
  { path: 'listado', component: ListadoComponent },
  { path: 'persona', component: PersonaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
