import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion.component';
import { CvComponent } from './components/cv/cv.component';
import { JucobComponent } from './components/jucob/jucob.component';
import { PokeApiComponent } from './components/poke-api/poke-api.component';
import { RickAndMortyComponent } from './components/rick-and-morty/rick-and-morty.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    CvComponent,
    JucobComponent,
    PokeApiComponent,
    RickAndMortyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
