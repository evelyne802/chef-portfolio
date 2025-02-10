import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  @Output() changeLanEvent = new EventEmitter<boolean>();
  siteInEnglish: boolean = true;
  languageIcon: string = '';
  galleryBtn: string = '';
  aboutBtn: string = '';
  menusBtn: string = '';
  menuBtnClasses: string = '';
  notInUseLanguageIcon: string = '';

  ngOnInit(){
    this.updateLanguage();
  }

  changeLanguage() {
    this.siteInEnglish = !this.siteInEnglish;
    this.changeLanEvent.emit(this.siteInEnglish);
    this.updateLanguage();
  }

  updateLanguage (){
    if(this.siteInEnglish){
      this.englishTranslate();
    } else {
      this.hebrewTranslate();
    }
  }

  hebrewTranslate() {
    this.galleryBtn = 'גלריה';
    this.aboutBtn = 'אודות';
    this.menusBtn = 'תפריטים';
    this.menuBtnClasses = 'menu-btn hebrew-font';
    this.languageIcon = '../../assets/images/us-flag.png';
    this.notInUseLanguageIcon = '../../assets/images/israel-flag.png';
  }

  englishTranslate() {
    this.galleryBtn = 'Gallery';
    this.aboutBtn = 'About';
    this.menusBtn = 'Menus';
    this.menuBtnClasses = 'menu-btn';
    this.languageIcon = '../../assets/images/israel-flag.png';
    this.notInUseLanguageIcon = '../../assets/images/us-flag.png';
  }

}
