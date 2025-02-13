import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  siteInEnglish: boolean = true;

  updateLanguage(){
    this.siteInEnglish = !this.siteInEnglish
  }

  getLanguage(){
    return this.siteInEnglish
  }

}
