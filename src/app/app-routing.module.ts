import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion.component';
import { CvComponent } from './components/cv/cv.component';
import { JucobComponent } from './components/jucob/jucob.component';
import { RickAndMortyComponent } from './components/rick-and-morty/rick-and-morty.component';
import { PokeApiComponent } from './components/poke-api/poke-api.component';




const routes: Routes = [
  { path: '', component: CvComponent },
  { path: 'jucob', component: JucobComponent },
  { path: 'pokemon', component: PokeApiComponent},
  { path: 'rick&morty', component: RickAndMortyComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
