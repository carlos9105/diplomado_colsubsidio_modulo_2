import { Component } from '@angular/core';
import { Card } from './card/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto_api_rick_and_morty';


residentes: Card[] = [{
  image:"1",
  name:"1",
  status:"1"
},
{
  image:"2",
  name:"2",
  status:"2"
},
{
  image:"3",
  name:"3",
  status:"3"
},
{
  image:"4",
  name:"4",
  status:"4"
},
{
  image:"5",
  name:"5",
  status:"5"
},
{
  image:"6",
  name:"6",
  status:"6"
},
  ]
}
