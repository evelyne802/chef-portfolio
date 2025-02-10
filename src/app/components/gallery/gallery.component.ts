import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  @Input() siteInEnglish: boolean = false;  

}
