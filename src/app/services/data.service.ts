import { Injectable } from '@angular/core';
import { GalleryPicture } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  galleryData: GalleryPicture[] = [
    { 
        id: 0, 
        hebrewDescription: "", 
        englishDescription: "",
        fullUrl: "full-sized/img-full-0.png",
        midUrl: "mid-sized/img-mid-0.png",
        minUrl: "minimized/img-0.png",    
    },
    { 
        id: 1, 
        hebrewDescription: "טורו סלמון ברוטב סויה - ג'ינג'ר", 
        englishDescription: "Salmon Toro in Soy-Ginger Sauce",
        fullUrl: "full-sized/img-full-22.png",
        midUrl: "mid-sized/img-mid-22.png",
        minUrl: "minimized/img-22.png",    
    },
    { 
        id: 2, 
        hebrewDescription: "יקיטורי נגימה", 
        englishDescription: "Negima Yakitori",
        fullUrl: "full-sized/img-full-2.png",
        midUrl: "mid-sized/img-mid-2.png",
        minUrl: "minimized/img-2.png",    
    },
    { 
        id: 3, 
        hebrewDescription: "נתח ליקיניקו", 
        englishDescription: "Yakiniku cut",
        fullUrl: "full-sized/img-full-3.png",
        midUrl: "mid-sized/img-mid-3.png",
        minUrl: "minimized/img-3.png",    
    },
    { 
        id: 4, 
        hebrewDescription: "", 
        englishDescription: "",
        fullUrl: "full-sized/img-full-4.png",
        midUrl: "mid-sized/img-mid-4.png",
        minUrl: "minimized/img-4.png",    
    },
    { 
        id: 5, 
        hebrewDescription: "גלידת מאצ'ה וקרקר שומשום", 
        englishDescription: "Matcha Ice Cream with Sesame Cracker",
        fullUrl: "full-sized/img-full-13.png",
        midUrl: "mid-sized/img-mid-13.png",
        minUrl: "minimized/img-13.png",   
    },
    { 
        id: 6, 
        hebrewDescription: "בשר סרטנים ופטריות שימג'י", 
        englishDescription: "Crab meat and Shimeji mushrooms",
        fullUrl: "full-sized/img-full-6.png",
        midUrl: "mid-sized/img-mid-6.png",
        minUrl: "minimized/img-6.png",    
    },
    { 
        id: 7, 
        hebrewDescription: "מאגורו טטאקי", 
        englishDescription: "Maguro Tataki",
        fullUrl: "full-sized/img-full-7.png",
        midUrl: "mid-sized/img-mid-7.png",
        minUrl: "minimized/img-7.png",    
    },
    { 
        id: 8, 
        hebrewDescription: "גיוזה", 
        englishDescription: "Gyoza",
        fullUrl: "full-sized/img-full-5.png",
        midUrl: "mid-sized/img-mid-5.png",
        minUrl: "minimized/img-5.png",    
    },
    { 
        id: 9, 
        hebrewDescription: "", 
        englishDescription: "",
        fullUrl: "full-sized/img-full-9.png",
        midUrl: "mid-sized/img-mid-9.png",
        minUrl: "minimized/img-9.png",    
    },
    { 
        id: 10, 
        hebrewDescription: "מאצ'ה ברולה", 
        englishDescription: "Matcha Brûlée",
        fullUrl: "full-sized/img-full-8.png",
        midUrl: "mid-sized/img-mid-8.png",
        minUrl: "minimized/img-8.png",    
    },
    { 
        id: 11, 
        hebrewDescription: "סשימי טונה עם שומשום וואסבי", 
        englishDescription: "Tuna Sashimi with Wasabi Sesame",
        fullUrl: "full-sized/img-full-11.png",
        midUrl: "mid-sized/img-mid-11.png",
        minUrl: "minimized/img-11.png",    
    },
    { 
        id: 12, 
        hebrewDescription: "אונגי דון", 
        englishDescription: "Unagi Don",
        fullUrl: "full-sized/img-full-12.png",
        midUrl: "mid-sized/img-mid-12.png",
        minUrl: "minimized/img-12.png",    
    },
    { 
        id: 13, 
        hebrewDescription: "טורו סלמון", 
        englishDescription: "Salmon Toro",
        fullUrl: "full-sized/img-full-1.png",
        midUrl: "mid-sized/img-mid-1.png",
        minUrl: "minimized/img-1.png",    
    },
    { 
        id: 14, 
        hebrewDescription: "סשימי טורו סלמון", 
        englishDescription: "Salmon Toro Sashimi",
        fullUrl: "full-sized/img-full-14.png",
        midUrl: "mid-sized/img-mid-14.png",
        minUrl: "minimized/img-14.png",    
    },
    { 
        id: 15, 
        hebrewDescription: "", 
        englishDescription: "",
        fullUrl: "full-sized/img-full-15.png",
        midUrl: "mid-sized/img-mid-15.png",
        minUrl: "minimized/img-15.png",    
    },
    { 
        id: 16, 
        hebrewDescription: "מון בלאן", 
        englishDescription: "Mont Blanc",
        fullUrl: "full-sized/img-full-16.png",
        midUrl: "mid-sized/img-mid-16.png",
        minUrl: "minimized/img-16.png",    
    },
    { 
        id: 17, 
        hebrewDescription: "סשימי המאצ'י", 
        englishDescription: "Hamachi Sashimi",
        fullUrl: "full-sized/img-full-17.png",
        midUrl: "mid-sized/img-mid-17.png",
        minUrl: "minimized/img-17.png",    
    },
    { 
        id: 18, 
        hebrewDescription: "מאגורו טטאקי", 
        englishDescription: "Maguro Tataki",
        fullUrl: "full-sized/img-full-18.png",
        midUrl: "mid-sized/img-mid-18.png",
        minUrl: "minimized/img-18.png",    
    },
    { 
        id: 19, 
        hebrewDescription: "טמפורה של שרימפס ואספרגוס עם רוטב וואסבי",
        englishDescription: "Shrimp and Asparagus Tempura with Wasabi Sauce",
        fullUrl: "full-sized/img-full-19.png",
        midUrl: "mid-sized/img-mid-19.png",
        minUrl: "minimized/img-19.png",    
    },
    { 
        id: 20, 
        hebrewDescription: "טונאקצו",
        englishDescription: "Tonkatsu",
        fullUrl: "full-sized/img-full-20.png",
        midUrl: "mid-sized/img-mid-20.png",
        minUrl: "minimized/img-20.png",    
    },
    { 
        id: 21, 
        hebrewDescription: "טונה צרובה",
        englishDescription: "Seared Tuna",
        fullUrl: "full-sized/img-full-21.png",
        midUrl: "mid-sized/img-mid-21.png",
        minUrl: "minimized/img-21.png",    
    },
    { 
        id: 22, 
        hebrewDescription: "יקיטורי נגימה", 
        englishDescription: "Negima Yakitori",
        fullUrl: "full-sized/img-full-10.png",
        midUrl: "mid-sized/img-mid-10.png",
        minUrl: "minimized/img-10.png",    
    },
    { 
        id: 23, 
        hebrewDescription: "אוקונומיאקי", 
        englishDescription: "Okonomiyaki",
        fullUrl: "full-sized/img-full-23.png",
        midUrl: "mid-sized/img-mid-23.png",
        minUrl: "minimized/img-23.png",    
    },
    { 
        id: 24, 
        hebrewDescription: "שולחן יקיניקו", 
        englishDescription: "Yakiniku Table",
        fullUrl: "full-sized/img-full-24.png",
        midUrl: "mid-sized/img-mid-24.png",
        minUrl: "minimized/img-24.png",    
    },
    { 
        id: 25, 
        hebrewDescription: "סשימי סקאלופ לפני צריבה", 
        englishDescription: "Scallop Sashimi Before Searing",
        fullUrl: "full-sized/img-full-25.png",
        midUrl: "mid-sized/img-mid-25.png",
        minUrl: "minimized/img-25.png",    
    },
    { 
        id: 26, 
        hebrewDescription: "מון בלאן", 
        englishDescription: "Mont Blanc",
        fullUrl: "full-sized/img-full-26.png",
        midUrl: "mid-sized/img-mid-26.png",
        minUrl: "minimized/img-26.png",    
    },
    { 
        id: 27, 
        hebrewDescription: "איקה טמפורה", 
        englishDescription: "Ika Tempura",
        fullUrl: "full-sized/img-full-27.png",
        midUrl: "mid-sized/img-mid-27.png",
        minUrl: "minimized/img-27.png",    
    },
    { 
        id: 28, 
        hebrewDescription: "גיוזה", 
        englishDescription: "Gyoza",
        fullUrl: "full-sized/img-full-28.png",
        midUrl: "mid-sized/img-mid-28.png",
        minUrl: "minimized/img-28.png",    
    },
    { 
        id: 29, 
        hebrewDescription: "מרק אודון וטמפורה בסגנון קנסאי", 
        englishDescription: "Kansai-style Udon Soup with Tempura",
        fullUrl: "full-sized/img-full-29.png",
        midUrl: "mid-sized/img-mid-29.png",
        minUrl: "minimized/img-29.png",    
    },
    { 
        id: 30, 
        hebrewDescription: "טרטר טונה אדומה על אורז", 
        englishDescription: "Tuna Tartare on Rice",
        fullUrl: "full-sized/img-full-30.png",
        midUrl: "mid-sized/img-mid-30.png",
        minUrl: "minimized/img-30.png",    
    },
    { 
        id: 31, 
        hebrewDescription: "הנד רול סלמון וטונה", 
        englishDescription: "Tuna and Salmon Hand Rolls",
        fullUrl: "full-sized/img-full-31.png",
        midUrl: "mid-sized/img-mid-31.png",
        minUrl: "minimized/img-31.png",    
    },
    { 
        id: 32, 
        hebrewDescription: "יקיניקו דון ", 
        englishDescription: "Yakiniku Don",
        fullUrl: "full-sized/img-full-32.png",
        midUrl: "mid-sized/img-mid-32.png",
        minUrl: "minimized/img-32.png",    
    },
    { 
        id: 33, 
        hebrewDescription: "", 
        englishDescription: "",
        fullUrl: "full-sized/img-full-33.png",
        midUrl: "mid-sized/img-mid-33.png",
        minUrl: "minimized/img-33.png",    
    },
    { 
        id: 34, 
        hebrewDescription: "גלידת מאצ'ה וקרקר שומשום", 
        englishDescription: "Matcha Ice Cream with Sesame Cracker",
        fullUrl: "full-sized/img-full-34.png",
        midUrl: "mid-sized/img-mid-34.png",
        minUrl: "minimized/img-34.png",    
    },
    { 
        id: 35, 
        hebrewDescription: "", 
        englishDescription: "",
        fullUrl: "full-sized/img-full-35.png",
        midUrl: "mid-sized/img-mid-35.png",
        minUrl: "minimized/img-35.png",    
    },
    { 
        id: 36, 
        hebrewDescription: "גלילות אנטריקוט מומלאות בבצל ירוק לצלייה ביקיניקו", 
        englishDescription: "Ribeye Rolls Stuffed with Green Onions for Yakiniku",
        fullUrl: "full-sized/img-full-36.png",
        midUrl: "mid-sized/img-mid-36.png",
        minUrl: "minimized/img-36.png",    
    },
    { 
        id: 37, 
        hebrewDescription: "טמפורה ירקות ופילה לברק", 
        englishDescription: "Vegetable and Sea Bass Fillet Tempura",
        fullUrl: "full-sized/img-full-37.png",
        midUrl: "mid-sized/img-mid-37.png",
        minUrl: "minimized/img-37.png",    
    },
    { 
        id: 38, 
        hebrewDescription: "מיקס פירות ים וסלמון מוקפצים עם אטריות אורז", 
        englishDescription: "Mixed Seafood and Salmon Stir-fried with Rice Noodles",
        fullUrl: "full-sized/img-full-38.png",
        midUrl: "mid-sized/img-mid-38.png",
        minUrl: "minimized/img-38.png",    
    },
    { 
        id: 39, 
        hebrewDescription: "צ'יראשי סלמון", 
        englishDescription: "Salmon Chirashi",
        fullUrl: "full-sized/img-full-39.png",
        midUrl: "mid-sized/img-mid-39.png",
        minUrl: "minimized/img-39.png",    
    },
  ]

  getGalleryData(){
    return this.galleryData;
  }

  getNumOfImages() {
    return this.galleryData.length;
  }

  getImage(id: number){
    return this.galleryData.filter((obj) => obj.id == id)[0];
  }
}


