import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetalleEscritorComponent } from './components/detalle-escritor/detalle-escritor.component';
import { EscritoresComponent } from './components/escritores/escritores.component';

import { LibrosComponent } from './components/libros/libros.component';

@NgModule({
  declarations: [
    AppComponent,
    EscritoresComponent,
    DetalleEscritorComponent,
    LibrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
