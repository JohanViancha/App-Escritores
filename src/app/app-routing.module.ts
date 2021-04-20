import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleEscritorComponent } from './components/detalle-escritor/detalle-escritor.component';
import { EscritoresComponent } from './components/escritores/escritores.component';
import { LibrosComponent } from './components/libros/libros.component';

const routes: Routes = [
  {path:'', pathMatch:'full',redirectTo:'/escritores'},
  {path:'escritores', component: EscritoresComponent},
  { path:'escritores/:escritorId', component:DetalleEscritorComponent, 
    children:[
      {path:'libros', component: LibrosComponent}
    ]
  },
  {path:'**', redirectTo:'/escritores'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
