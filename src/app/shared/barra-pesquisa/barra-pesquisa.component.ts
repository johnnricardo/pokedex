import { Component, EventEmitter, Output } from '@angular/core';
import { PokedexApiService } from 'src/app/services/pokedex-api.service';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css']
})
export class BarraPesquisaComponent {
  public msgValue: string = 'Buscar Pokemon...'
  @Output() public ClickEvent: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(public pokedexApiService: PokedexApiService){}

  public ButtonClicked() {
    this.msgValue = ''
  }

  public ButtonChange(input: string){

    this.pokedexApiService.SearchName(input)
    this.ClickEvent.emit(true)
    
    
  }

  public ButtonBlur() {
    this.msgValue = 'Buscar Pokemon...' 
  }
}
