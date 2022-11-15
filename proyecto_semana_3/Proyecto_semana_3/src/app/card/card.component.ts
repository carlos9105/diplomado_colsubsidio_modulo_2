import { Component, Input } from '@angular/core';
import { Card } from './card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

@Input() cardInfo:Card = {
  imagen:"https://media.istockphoto.com/vectors/default-avatar-profile-icon-grey-photo-placeholder-vector-id846183008?b=1&k=6&m=846183008&s=170667a&w=0&h=GWEgsAZwNpbbFad47RvwGhoqFmqYu8SF9GW6Oi2E4Hk=",
  nombre:"nombre por defecto",
  contenido:"contenido por defecto",
  boton:"boton por defecto"
}

}
