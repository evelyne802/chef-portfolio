import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DataService } from 'src/app/services/data.service';
import { GalleryPicture } from 'src/app/types/types';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-gallery-popup',
  templateUrl: './gallery-popup.component.html',
  styleUrls: ['./gallery-popup.component.css'],
  imports: [
    MatButtonModule,
    MatDialogModule,
    NgIf
  ]
})
export class GalleryPopupComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { imgId: number, siteInEnglish: boolean },
    private dataService: DataService
  ){}

  screenSize: number = window.innerWidth;
  imgDetails: GalleryPicture = this.dataService.getImage(this.data.imgId);
  hasDescription: boolean = this.imgDetails.englishDescription == '' ? false : true;
  imgDescription: string = this.data.siteInEnglish ? 
                           this.imgDetails.englishDescription : 
                           this.imgDetails.hebrewDescription
  fullSizedImg: string = this.screenSize > 650 ? 
                          `../../../assets/images/gallery/${this.imgDetails.fullUrl}` :
                          `../../../assets/images/gallery/${this.imgDetails.midUrl}`;
        
}
