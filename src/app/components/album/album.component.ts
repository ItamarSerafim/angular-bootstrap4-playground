import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  @Input() albums: {
    id?: number;
    title: string;
    descr?: string;
    thumbnail: string;
    url: string;
  }[] = [];

  @Input() activeAlbumIndex: number;
  activeAlbum = null;
  @Input() showAlbumsPane: boolean;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const albumId = +this.activatedRoute.snapshot.queryParams['albumId'] || this.activeAlbumIndex;
    this.activeAlbum = this.albums[albumId || 0];
    debugger;

  }
}
