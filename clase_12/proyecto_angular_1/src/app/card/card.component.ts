import { Component, Input } from '@angular/core';
import { Card } from './card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() cardInfo:Card = {
  title:"Card title",
  text:"Contenido",
  button:"Pulsar",
  img:"https://www.lifeder.com/wp-content/uploads/2019/11/el-sol-NASA-estrellas-min.jpg"
}
}
