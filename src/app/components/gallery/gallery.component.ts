import { Component, Input } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  standalone: true,
  selector: 'app-gallery',
  imports: [
    HeaderComponent
  ],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

    constructor( private mainService: MainService ){}
  
    siteInEnglish: boolean = false; 
    
    ngOnInit(){
      this.siteInEnglish = this.mainService.getLanguage();
    }

  changeLanguage() {
    this.siteInEnglish = !this.siteInEnglish;
  }
}
