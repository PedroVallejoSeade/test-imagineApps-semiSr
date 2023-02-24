import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { ContenidoTarjeta2 } from '../interfaces/contenidoTarjeta2';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styles: [
  ]
})
export class Card2Component implements AfterViewChecked {
  @Input() cardData!: ContenidoTarjeta2;

  ngAfterViewChecked(): void {
    console.log(this.cardData);
  }

}
