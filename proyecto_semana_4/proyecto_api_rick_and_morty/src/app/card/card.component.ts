import { Component, Input } from '@angular/core';
import { RickAndMortyService } from '../services/rick-and-morty.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() cardInfo: any

//   constructor(private RMService: RickAndMortyService) {}

//   getCharacter(chNum: any) {
//     //obs = elemento observable  
//     const obs = this.RMService.character(chNum)
//     obs.subscribe(
//       response => {
//           this.cardInfo = response
//           console.log(response)
//         },
//         error => console.log(error)
//     )
//   }
}
