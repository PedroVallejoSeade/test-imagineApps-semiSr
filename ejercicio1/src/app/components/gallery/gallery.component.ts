import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styles: [
  ]
})
export class GalleryComponent {

  @Input() imgUrls : string[] =[];

}
