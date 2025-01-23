import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  @Input() siteInEnglish: boolean = false;  
  aboutInfo: string ='';

  ngOnInit(){

  }

  
}
