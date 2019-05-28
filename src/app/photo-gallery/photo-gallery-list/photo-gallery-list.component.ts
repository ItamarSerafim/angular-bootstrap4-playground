import { Component } from '@angular/core';

@Component({
  selector: 'app-photo-gallery-list',
  templateUrl: './photo-gallery-list.component.html',
  // template: `Photo Gallery List`,
  styleUrls: ['./photo-gallery-list.component.scss']
})
export class PhotoGalleryListComponent {

  editPhoto(){
    alert('Editing this photo');
  }
}