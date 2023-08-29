import { Component, OnInit } from '@angular/core';

//interface
import { PokemonInterface } from 'src/app/interface/pokemon-interface';

//service
import { PokedexApiService } from 'src/app/services/pokedex-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public pokemonList: Array<PokemonInterface> = []

  constructor( public pokedexService: PokedexApiService){}

  ngOnInit(): void {
    this.GetAPI();
    this.AddList();
    //setInterval(() => {this.AddList()}, 0.1);
  }

  public GetAPI(){
    
    for(let index = 1; index < 101; index++){
      this.pokedexService.GetApi(index).subscribe({
        next: (sucesso: any) => { this.pokedexService.AddPokemonName( sucesso.id, sucesso) },
        error: (error: any) => {console.log(error)}
        })
      }
      
  }

  public AddList(){

    if (this.pokemonList != this.pokedexService.pokemonName) {
    this.pokemonList = this.pokedexService.pokemonName
    } else{
      this.pokemonList
    }
  }
}
