import { Component } from '@angular/core';
import { Card } from './card/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitle:string = 'proyecto_angular_1';
  card:Card[] = [
  {
    title:"Titulo nuevo",
    text:"Contenido nuevo",
    button:"Pulsar nuevo",
    img:"https://concepto.de/wp-content/uploads/2019/10/planeta-tierra-e1570462065623.jpg"
  },
  ]
}
