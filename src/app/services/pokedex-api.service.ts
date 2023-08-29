import { EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, startWith } from 'rxjs';
import { PokemonInterface } from '../interface/pokemon-interface';

@Injectable({
  providedIn: 'root'
})

export class PokedexApiService {

  public url: string = "https://pokeapi.co/api/v2/pokemon-form/"
  public urlStats: string = "https://pokeapi.co/api/v2/pokemon/"

  public pokemonName: Array<PokemonInterface> = []
  public pokemonNameFullList: Array<PokemonInterface> = []
  public pokemonNameAfterSearch: Array<PokemonInterface> = []

  constructor(private http: HttpClient ) { }

  public GetApi(id: number): Observable<Array<PokemonInterface>>{
    return this.http.get<Array<PokemonInterface>>(`${this.url}${id}`).pipe(
      success => success,
      error => error
    )
  }

  public GetApiStats(id: number): Observable<any> {
    return this.http.get<any>(`${this.urlStats}${id}`).pipe(
      success => success,
      error => error
    )
  }
  
  public AddPokemonName(index: number, dados: any){

    this.pokemonName[index-1] = { id: index, name: dados.name, url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`}

    if (dados.types[1]?.type.name != null) {
      this.pokemonName[index-1].types = {
        typename1: dados.types[0].type.name, 
        typename2: dados.types[1].type.name}
    } else {
      this.pokemonName[index-1].types = {typename1: dados.types[0].type.name}
    }

    this.pokemonNameFullList[index-1] = this.pokemonName[index-1]

  }

  public SearchName(dados: string){

    for ( let i = 0; i < 100 ; i++) {

      if (this.pokemonNameFullList[i].name.startsWith(dados.toLowerCase())) {
        this.pokemonNameAfterSearch.push(this.pokemonNameFullList[i])
      }
    }
    this.pokemonName = this.pokemonNameAfterSearch
    this.pokemonNameAfterSearch = []

    }

    
  }

