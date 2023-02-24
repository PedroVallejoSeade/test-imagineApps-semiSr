import { Component } from '@angular/core';
import { ContenidoTarjeta2 } from '../interfaces/contenidoTarjeta2';

@Component({
  selector: 'app-card2-container',
  templateUrl: './card2-container.component.html',
  styles: [
  ]
})
export class Card2ContainerComponent {
  
  cardsData : ContenidoTarjeta2[] = [
    {
      urlImg: "https://ctfassets.imgix.net/vh7r69kgcki3/3j9aqbBpEAl7GYPX1CbAIo/6ee0f13d82cc6e1ad53b5affb75d30ab/Hot_Desks_274x274.png?auto=format%20compress&fit=crop&q=50&w=100&h=100",
      titulo: "Membresía de coworking",
      cuerpo: "Hot desks, salas, cabinas telefónicas y más",
      capacidad: "Mas de 1"
    },
    {
      urlImg: "https://ctfassets.imgix.net/vh7r69kgcki3/UXP1XHGUaziQtFAGuMCZx/e3b5a6c56456da4f290c18426eb84c1a/Private_Office_274x274.png?auto=format%20compress&fit=crop&q=50&w=100&h=100",
      titulo: "Oficina Privada",
      cuerpo: "Oficinas listas con amenidades compartidas",
      capacidad: "1-20+"
    },
    {
      urlImg: "https://ctfassets.imgix.net/vh7r69kgcki3/3UdjOaiPRb734SnJ8ApLUk/b9455393017cfe8916d722ea17b639e9/Office_Suite_1440x1440.png?auto=format%20compress&fit=crop&q=50&w=100&h=100",
      titulo: "Executive Office",
      cuerpo: "Oficinas de primer nivel con amenidades privadas",
      capacidad: "20-100+"
    },
    {
      urlImg: "https://ctfassets.imgix.net/vh7r69kgcki3/35qhYMr0wIJvd2o5MAuSHd/c45139bad5decb1cf980735f9f632a05/Meeting_Small_274x274.png?auto=format%20compress&fit=crop&q=50&w=100&h=100",
      titulo: "Sala de reuniones",
      cuerpo: "Salas privadas que se pueden reservar por hora",
      capacidad: "1-20"
    },
  ]
}
