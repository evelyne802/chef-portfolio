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
  years:number = new Date().getFullYear()-2021;

  ngOnChanges(){
    this.changeLanguage();
  }

  changeLanguage() {
    if(this.siteInEnglish){
      this.aboutInfo = `Ofer began his journey in 1993 when he moved to Japan to study the secrets of Japanese cuisine. 
                        Over the course of seven years, he worked and trained in Japanese restaurants, 
                        gaining professional experience in the field. Upon his return to Israel, 
                        he opened the restaurant “Yakiniku Tenaka,” specializing in Japanese grill meals, 
                        followed by “Tenaka,” a Japanese delicatessen. About ${this.years} years ago, 
                        he decided to take an independent path and started preparing authentic 
                        Japanese food for private dining experiences.`;
    } else {
      this.aboutInfo = `עופר החל את דרכו בשנת 1993, כשעבר ליפן ללמוד את סודות המטבח היפני. 
                        במהלך שבע שנים עבד ולמד במסעדות יפניות, וצבר ניסיון מקצועי בתחום. 
                        עם חזרתו לישראל, פתח את מסעדת “יקיניקו טנקה” שהתמחתה בארוחות גריל יפני, 
                        ואחריה גם את “טנקה” - מעדנייה יפנית. 
                        לפני כ-${this.years} שנים החליט לפנות לדרך עצמאית, 
                        והחל לבשל אוכל יפני אותנטי בארוחות פרטיות אצל לקוחותיו.`;
    }
  }

  
}
