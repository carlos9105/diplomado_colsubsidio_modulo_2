import { Component } from '@angular/core';
import { RickAndMortyService } from '../servicios/rick-and-morty.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {

characterInfo: any

constructor (private rmservice:RickAndMortyService){}

getCharacter(numero: string | number){
  const obs = this.rmservice.character(numero)
  obs.subscribe(
    response => {
      this.characterInfo = response
      console.log(response)
    },
    error => console.log(error)
  )
} 
}
