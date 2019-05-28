import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PhotoGalleryListComponent } from './photo-gallery-list/photo-gallery-list.component';

@Component({
  selector: 'app-photo-gallery',
  template: `<h1>Photo Gallery coming to life</h1>
    <a routerLink="photo-gallery-list">Photo Gallery List</a>
  `
})
class PhotoGalleryComponent {}


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
    {path: '', component: PhotoGalleryComponent},
    {
      path: 'photo-gallery-list',
      component: PhotoGalleryListComponent
    },
    ])],
  declarations: [PhotoGalleryComponent, PhotoGalleryListComponent],
  exports: [PhotoGalleryComponent]
})
export class PhotoGalleryModule {

}
