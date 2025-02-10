import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent {
  
  @Input() siteInEnglish: boolean = false;  

}
