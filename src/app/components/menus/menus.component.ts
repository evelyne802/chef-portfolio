import { Component, Input } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  standalone: true,
  selector: 'app-menus',
  imports: [
    HeaderComponent
  ],
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent {

  constructor( private mainService: MainService ){}

  siteInEnglish: boolean = false; 
  
  ngOnInit(){
    this.siteInEnglish = this.mainService.getLanguage();
  }
  
  changeLanguage() {
    this.siteInEnglish = !this.siteInEnglish;
  }

}
