import { Component, Input } from '@angular/core';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-card-location',
  templateUrl: './card-location.component.html',
  styleUrls: ['./card-location.component.css']
})
export class CardLocationComponent {

cardLocInfo: any

constructor(private LocService: LocationService) {}

  getLocation(ltNum: any) {
    //obs = elemento observable  
    const obs = this.LocService.location(ltNum)
    obs.subscribe(
      response => {
          this.cardLocInfo = response
          console.log(response)
        },
        error => console.log(error)
    )
  }

}
