import { Component, inject, Input } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { HeaderComponent } from '../header/header.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NgFor } from '@angular/common';
import { GalleryPopupComponent } from '../gallery-popup/gallery-popup.component';

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

  numOfPictues: number = 33;
  numbers: number[] = Array.from(Array(this.numOfPictues).keys());
  readonly dialog = inject(MatDialog);

  constructor( private mainService: MainService ){}

  siteInEnglish: boolean = false; 
  
  ngOnInit(){
    this.siteInEnglish = this.mainService.getLanguage();
  }

  openPopup(num: number) {
    const dialogRef = this.dialog.open(GalleryPopupComponent, {
      hasBackdrop: true,
      data: { imgNum: num }
    });
  }

  changeLanguage() {
    this.siteInEnglish = !this.siteInEnglish;
  }

  rightScroll(elementId: string) {
    const right = document.querySelector(`#${elementId}`);
    right!.scrollBy(760, 0);
  }

  leftScroll(elementId: string) {
    const left = document.querySelector(`#${elementId}`);
    left!.scrollBy(-760, 0);
  }
}
