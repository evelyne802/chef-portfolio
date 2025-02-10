import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MenusComponent } from './components/menus/menus.component';

export const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'menus', component: MenusComponent }
];
