import { Component, inject, Input } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { HeaderComponent } from '../header/header.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NgFor } from '@angular/common';
import { GalleryPopupComponent } from '../gallery-popup/gallery-popup.component';
import { DataService } from 'src/app/services/data.service';
import { GalleryPicture } from 'src/app/types/types';

@Component({
  standalone: true,
  selector: 'app-gallery',
  imports: [
    HeaderComponent,
    MatDialogModule,
    NgFor
  ],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  constructor( private dataService: DataService, private mainService: MainService  ){}

  screenSize: number = window.innerWidth;
  gallerySize: number = this.screenSize * 0.7;
  Images: GalleryPicture[] = this.dataService.getGalleryData();
  siteInEnglish: boolean = false; 
  readonly dialog = inject(MatDialog);

  
  ngOnInit(){
    this.siteInEnglish = this.mainService.getLanguage();
  }

  openPopup(num: number) {
    const dialogRef = this.dialog.open(GalleryPopupComponent, {
      panelClass: 'custom-dialog-container',
      hasBackdrop: true,
      data: { imgId: num, siteInEnglish: this.siteInEnglish }
    });
  }

  changeLanguage() {
    this.siteInEnglish = !this.siteInEnglish;
  }

  rightScroll(elementId: string) {
    const right = document.querySelector(`#${elementId}`);
    right!.scrollBy((this.gallerySize), 0);
  }

  leftScroll(elementId: string) {
    const left = document.querySelector(`#${elementId}`);
    left!.scrollBy(-(this.gallerySize), 0);
  }
}
