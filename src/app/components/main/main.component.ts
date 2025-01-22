import { Component } from '@angular/core';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  constructor( private mainService: MainService ){}

  siteInEnglish: boolean = true;
  languageIcon: string = '../../assets/images/us-flag.png';
  notInUseLanguageIcon: string = '../../assets/images/israel-flag.png';
  titleDescription: string = 'שף מומחה לאוכל יפני';
  descriptionClasses: string = 'subtitle hebrew-font';

  ngOnInit(){
    this.changeLanguage();
  }

  changeLanguage(){
    this.siteInEnglish = !this.siteInEnglish;
    this.mainService.updateLanguage();
    if(this.siteInEnglish){
      this.englishTranslate();
    } else {
      this.hebrewTranslate();
    }
  }

  hebrewTranslate() {
    this.titleDescription = 'שף מומחה לאוכל יפני';
    this.descriptionClasses = 'subtitle hebrew-font';
    this.languageIcon = '../../assets/images/us-flag.png';
    this.notInUseLanguageIcon = '../../assets/images/israel-flag.png';
  }

  englishTranslate() {
    this.titleDescription = 'Japanese Private Chef';
    this.descriptionClasses = 'subtitle';
    this.languageIcon = '../../assets/images/israel-flag.png';
    this.notInUseLanguageIcon = '../../assets/images/us-flag.png';
  }

}
