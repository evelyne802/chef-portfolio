import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-gallery-popup',
  templateUrl: './gallery-popup.component.html',
  styleUrls: ['./gallery-popup.component.css'],
  imports: [
    MatButtonModule,
    MatDialogModule
  ]
})
export class GalleryPopupComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { imgNum: number },
  ){}

  fullSizedImg: string = `../../../assets/images/gallery/full-sized/img-full-${this.data.imgNum}.png`;

}
