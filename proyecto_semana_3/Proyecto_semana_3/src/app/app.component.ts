import { Component } from '@angular/core';
import { Card } from './card/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Proyecto_semana_3';

    tarjetas = [{
      imagen:"https://www.saramusico.com/wp-content/uploads/2019/04/foto-de-perfil-en-linkedin.jpg",
      nombre:"Martina D.",
      contenido:"Gerente Financiero",
      boton:"Ver perfil de Martina"
    },
    {
      imagen:"https://www.fotografos-barcelona.eu/images/spsimpleportfolio/fotografia-perfil-profesional-02/fotografia-perfil-profesional02_600x600.jpg",
      nombre:"Miguel S.",
      contenido:"Gerente de Marketing",
      boton:"Ver perfil de Miguel"
    },
    {
      imagen:"https://static.platzi.com/cdn-cgi/image/width=1024,quality=75,format=auto/media/teachers/perfil-profesores-rodrigo-cortes.png",
      nombre:"Lucas",
      contenido:"Gerente Comercial (CSO)",
      boton:"Ver perfil de Lucas"
    },
    ]
}
