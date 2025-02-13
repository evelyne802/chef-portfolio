import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ 
    HeaderComponent
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor( private mainService: MainService ){
  }

  siteInEnglish: boolean = false;  
  
  aboutInfo: string ='';
  years:number = new Date().getFullYear()-2021;

  ngOnInit() {
    this.siteInEnglish = this.mainService.getLanguage();
    this.updateLanguage();
  }

  changeLanguage() {
    this.siteInEnglish = !this.siteInEnglish;
    this.updateLanguage();
  }

  updateLanguage(){
    if(this.siteInEnglish){
      this.aboutInfo = `Ofer's journey began in 1993 when he moved to Japan to study Japanese cuisine. 
                        Over seven years, he trained in Japanese restaurants, gaining professional experience. 
                        Returning to Israel, he opened “Yakiniku Tenka,” a Japanese grill, and later “Tenka,” 
                        a delicatessen. About ${this.years} years ago, he began offering authentic Japanese food for 
                        private dining experiences.`;
    } else {
      this.aboutInfo = `עופר החל את דרכו בשנת 1993, כשעבר ליפן ללמוד את סודות המטבח היפני. 
                        במהלך שבע שנים עבד ולמד במסעדות יפניות, וצבר ניסיון מקצועי בתחום. 
                        עם חזרתו לישראל, פתח את מסעדת “יקיניקו טנקה” שהתמחתה בארוחות גריל יפני, 
                        ואחריה גם את “טנקה” - מעדנייה יפנית. 
                        לפני כ-${this.years} שנים החליט לפנות לדרך עצמאית, 
                        והחל לבשל אוכל יפני אותנטי בארוחות פרטיות אצל לקוחותיו`;
    }
  }

  
}
