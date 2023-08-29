import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexLogoComponent } from './shared/pokedex-logo/pokedex-logo.component';
import { BarraPesquisaComponent } from './shared/barra-pesquisa/barra-pesquisa.component';
import { HomeComponent } from './shared/pages/home/home.component';
import { DetailComponent } from './shared/pages/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PokedexLogoComponent,
    BarraPesquisaComponent,
    HomeComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
