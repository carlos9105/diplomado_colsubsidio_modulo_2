import { Component, Input } from '@angular/core';
import { RickAndMortyServiceService } from '../services/rick-and-morty-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {

  characterInfo: any

  constructor(private RMService: RickAndMortyServiceService) {}

  getCharacter(chNum: any) {
    //obs = elemento observable  
    const obs = this.RMService.character(chNum)
    obs.subscribe(
      response => {
          this.characterInfo = response
          console.log(response)
        },
        error => console.log(error)
    )
  }
}
