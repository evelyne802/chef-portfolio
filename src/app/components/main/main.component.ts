import { Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { RouterLink } from '@angular/router';
import { NgxPageScrollCoreModule  } from 'ngx-page-scroll-core';
import { NgOptimizedImage } from '@angular/common'
import { HeaderComponent } from '../header/header.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { MenusComponent } from '../menus/menus.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ 
    AboutComponent, 
    RouterLink, 
    NgxPageScrollCoreModule,
    NgOptimizedImage,
    HeaderComponent,
    GalleryComponent,
    MenusComponent
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor() {}

  @ViewChild('main') mainComp: ElementRef | undefined;
  @ViewChild(AboutComponent, {static: true, read: ElementRef}) aboutComp: AboutComponent | undefined;
  @ViewChild(GalleryComponent, {static: true, read: ElementRef}) galleryComp: GalleryComponent | undefined;
  @ViewChild(MenusComponent, {static: true, read: ElementRef}) menusComp: MenusComponent | undefined;

  components: Array<any> = [];
  compIndex: number = 0;

  siteInEnglish: boolean = true;
  titleDescription: string = '';
  descriptionClasses: string = '';
  oldScroll: number = window.scrollY || window.pageYOffset;
  hasFired: boolean = false;

  ngOnInit(){
    this.updateLanguage();
    window.scroll({ top: 0, left: 0 });
    console.log(window.screen.height);
  }

  ngAfterViewInit(){
    this.components = [this.mainComp, this.aboutComp, this.galleryComp, this.menusComp];
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


  onScroll(e: Event) {
    let currentScroll = (window.scrollY || window.pageYOffset); // pixels scrolled from top of the window

    // scrolling down 
    if (currentScroll > this.oldScroll && !this.hasFired) {
        console.log('down');
        this.compIndex = this.compIndex + 1;
        console.log(this.compIndex);
        this.components[this.compIndex]!.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
        this.hasFired = true;
    }

    // scrolling up
    else if(currentScroll < this.oldScroll && this.hasFired) {
        console.log('up');
        this.compIndex = this.compIndex - 1;
        console.log(this.compIndex);
        this.components[this.compIndex]!.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
        this.hasFired = false;
    }
           
    this.oldScroll = currentScroll;
  }



}
