import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  siteInEnglish: boolean = false;

  updateLanguage(){
    this.siteInEnglish = !this.siteInEnglish;
  }

}
