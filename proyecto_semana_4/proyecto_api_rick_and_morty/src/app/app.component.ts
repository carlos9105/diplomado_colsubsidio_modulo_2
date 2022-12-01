import { Component } from '@angular/core';
import { RickAndMortyService } from './services/rick-and-morty.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto_api_rick_and_morty';

  cardLocInfo: any
  cardInfo: any = []

  constructor(private LocService: RickAndMortyService) {}

  // getLocation(ltNum: any) {
  //   //obs = elemento observable  
  //   const obs = this.LocService.location(ltNum)
  //   obs.subscribe(
  //     response => {
  //         this.cardLocInfo = response
  //         this.cardInfo=[]
  //         console.log(response)
  //       },
  //       error => console.log(error)
  //   )
  // }


  // getResidents() {
  //   console.log(this.cardLocInfo.residents);

  //   this.cardLocInfo.residents.forEach((element:string) => {
  //     const obs = this.LocService.resident(element)

  //     obs.subscribe(
  //       response => {
  //           this.cardInfo.push(response)
  //           console.log(response)
  //         },
  //         error => console.log(error)
  //     )

  //   });
  // }

  getLocation(ltNum: any) {
    //obs = elemento observable  
    const obs = this.LocService.location(ltNum)
    obs.subscribe(
      response => {
          this.cardInfo=[]
          this.cardLocInfo = response
          this.getResidents()

          console.log(response)
        },
        error => console.log(error)
    )
  }


  getResidents() {
    console.log(this.cardLocInfo.residents);

    this.cardLocInfo.residents.forEach((element:string) => {
      const obs = this.LocService.resident(element)

      obs.subscribe(
        response => {
            this.cardInfo.push(response)
            console.log(response)
          },
          error => console.log(error)
      )

    });
  }
}