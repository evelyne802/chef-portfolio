import { Component, Inject } from '@angular/core';
import { MainService } from '../../services/main.service';
import { AboutComponent } from '../about/about.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { PageScrollService, NgxPageScrollCoreModule  } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ 
    AboutComponent, 
    RouterLink, 
    NgxPageScrollCoreModule
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor( private mainService: MainService ) {}


  siteInEnglish: boolean = true;
  languageIcon: string = '';
  notInUseLanguageIcon: string = '';
  titleDescription: string = '';
  descriptionClasses: string = '';
  galleryBtn: string = '';
  aboutBtn: string = '';
  menuBtnClasses: string = '';

  ngOnInit(){
    this.updateLanguage();
  }


  updateLanguage() {
    if(this.siteInEnglish){
      this.englishTranslate();
    } else {
      this.hebrewTranslate();
    }
  }

  changeLanguage(){
    this.siteInEnglish = !this.siteInEnglish;
    this.mainService.updateLanguage();
    this.updateLanguage();
  }

  hebrewTranslate() {
    this.galleryBtn = 'גלריה';
    this.aboutBtn = 'אודות';
    this.titleDescription = 'שף מומחה לאוכל יפני';
    this.descriptionClasses = 'subtitle hebrew-font';
    this.menuBtnClasses = 'menu-btn hebrew-font';
    this.languageIcon = '../../assets/images/us-flag.png';
    this.notInUseLanguageIcon = '../../assets/images/israel-flag.png';
  }

  englishTranslate() {
    this.galleryBtn = 'Gallery';
    this.aboutBtn = 'About';
    this.titleDescription = 'Japanese Private Chef';
    this.descriptionClasses = 'subtitle';
    this.menuBtnClasses = 'menu-btn';
    this.languageIcon = '../../assets/images/israel-flag.png';
    this.notInUseLanguageIcon = '../../assets/images/us-flag.png';
  }

}
