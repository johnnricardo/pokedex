import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailInterface } from 'src/app/interface/detail-interface';
import { PokedexApiService } from 'src/app/services/pokedex-api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  
  constructor ( private route : ActivatedRoute, private apiService: PokedexApiService){}
 
  public pokemonDetails: Array<DetailInterface> = []
  public pokemonStats: Array<any> = []
  public id: number = 0 

  ngOnInit(): void {

    this.route.params.subscribe({
      next: (resposta: any) => {this.id = resposta.id},
      error: (error: any) => {console.log(error)}
    })

    this.GetAPI()
    this.GetApiStats()
    this.AddLista()
  }

  public GetAPI(){
    for(let index = 1; index < 101; index++){
      this.apiService.GetApi(index).subscribe({
        next: (sucesso: any) => { this.apiService.AddPokemonName( sucesso.id, sucesso) },
        error: (error: any) => {console.log(error)}
        })
      }
  }

  public AddLista() {
    this.pokemonDetails = this.apiService.pokemonName
   
  }

  public GetApiStats(){
    console.log(this.id)

    this.apiService.GetApiStats(this.id).subscribe({
      next: (resposta: any) => this.pokemonStats[this.id] = resposta.stats
    })
   console.log(this.pokemonStats)
    
  }

}
