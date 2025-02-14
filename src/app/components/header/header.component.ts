import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  standalone: true,
  imports: [
    RouterLink
  ],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor( private mainService: MainService ){}
  
  @Output() changeLanEvent = new EventEmitter<boolean>();
  siteInEnglish: boolean = true;
  languageIcon: string = '';
  galleryBtn: string = '';
  aboutBtn: string = '';
  menusBtn: string = '';
  homeBtn: string = '';
  menuBtnClasses: string = '';
  notInUseLanguageIcon: string = '';

  ngOnInit(){
    this.siteInEnglish = this.mainService.getLanguage();
    console.log('english: ', this.siteInEnglish);
    this.updateLanguage();
  }

  changeLanguage() {
    this.siteInEnglish = !this.siteInEnglish;
    this.mainService.updateLanguage();
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
    this.homeBtn = 'ראשי';
    this.menuBtnClasses = 'menu-btn hebrew-font';
    this.languageIcon = '../../assets/images/us-flag.png';
    this.notInUseLanguageIcon = '../../assets/images/israel-flag.png';
  }

  englishTranslate() {
    this.galleryBtn = 'Gallery';
    this.aboutBtn = 'About';
    this.menusBtn = 'Menus';
    this.homeBtn = 'home';
    this.menuBtnClasses = 'menu-btn';
    this.languageIcon = '../../assets/images/israel-flag.png';
    this.notInUseLanguageIcon = '../../assets/images/us-flag.png';
  }
}
