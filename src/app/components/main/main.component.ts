import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ 
    HeaderComponent,
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor( private mainService: MainService ) {}

  siteInEnglish: boolean = true;
  titleDescription: string = '';
  descriptionClasses: string = '';
  hasFired: boolean = false;
  oldScroll = (window.scrollY || window.pageYOffset);

  ngOnInit(){
    this.siteInEnglish = this.mainService.getLanguage();
    this.updateLanguage();
  }

  changeLanguage(){
    this.siteInEnglish = !this.siteInEnglish;
    this.updateLanguage();
  }

  updateLanguage() {
    if(this.siteInEnglish){
      this.englishTranslate();
    } else {
      this.hebrewTranslate();
    }
  }

  hebrewTranslate() {
    this.titleDescription = 'שף מומחה לאוכל יפני';
    this.descriptionClasses = 'subtitle hebrew-font';
  }

  englishTranslate() {
    this.titleDescription = 'Japanese Private Chef';
    this.descriptionClasses = 'subtitle';
  }

}
