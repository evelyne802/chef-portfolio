import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  siteInEnglish: boolean = true;
  languageIcon: string = '../../assets/images/us-flag.png';
  notInUseLanguageIcon: string = '../../assets/images/israel-flag.png';
  titleDescription: string = 'שף מומחה לאוכל יפני';
  descriptionClasses: string = 'subtitle hebrew-font';

  ngOnInit(){
    this.languageChange();
  }

  languageChange(){
    this.siteInEnglish = !this.siteInEnglish;
    if(this.siteInEnglish){
      this.englishTranslate();
      this.languageIcon = '../../assets/images/israel-flag.png';
      this.notInUseLanguageIcon = '../../assets/images/us-flag.png';
    } else {
      this.hebrewTranslate();
      this.languageIcon = '../../assets/images/us-flag.png';
      this.notInUseLanguageIcon = '../../assets/images/israel-flag.png';
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
