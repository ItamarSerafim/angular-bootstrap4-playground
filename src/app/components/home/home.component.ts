import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  albums: {
    id?: number;
    title: string;
    descr?: string;
    thumbnail: string;
    slides: string[];
  }[] = [];
  showAlbumsPane = true;

  private breakpointObserverSubscription;

  constructor(private breakpointObserver: BreakpointObserver) {
    const sideNavSlides = this.getRadomPhotos();
    const topNavSlides = this.getRadomPhotos();
    const pagesSlides = this.getRadomPhotos();
    const navLinkslides = this.getRadomPhotos();
    this.albums = [
      {
        title: 'Side navigation',
        descr: 'Know the best features of this site side navigation.',
        thumbnail: sideNavSlides[0],
        // '//i.imgur.com/NmT1WkY.png',
        slides: sideNavSlides
      },
      {
        title: 'Top navigation',
        descr: 'Know the best features of this site top navigation and menus.',
        thumbnail: topNavSlides[0],
        // '//i.imgur.com/1XDewle.png',
        slides: topNavSlides
      },
      {
        title: 'Pages',
        descr: 'Know the best features of pages.',
        thumbnail: pagesSlides[0],
        // '//i.imgur.com/NmT1WkY.png',
        slides: pagesSlides
      },
      {
        title: 'Navigation links component',
        descr: 'Know the best features of pages.',
        thumbnail: navLinkslides[0],
        // '//i.imgur.com/NmT1WkY.png',
        slides: navLinkslides
      }
    ];

    this.breakpointObserverSubscription = this.breakpointObserver
      .observe([
        // '(min-width: 768px) and (max-width: 1024px)',/* Sidenav: open - Menu: icon */
        '(max-width: 1023px)' /* Sidenav: open - Menu: icon+text */,
        '(min-width: 1024px)' /* Sidenav: open, side - Menu: icon+text */
      ])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          if (state.breakpoints['(max-width: 1023px)']) {
            this.showAlbumsPane = false;
          }
          if (state.breakpoints['(min-width: 1025px)']) {
            this.showAlbumsPane = true;
          }
        }
      });
  }

  getRadomPhotos() {
    return [1, 2, 3, 4].map(
      () => `https://picsum.photos/900/500?random&t=${Math.random()}`
    );
  }

  ngOnInit() {}
  ngOnDestroy() {
    this.breakpointObserverSubscription.unsubscribe();
  }
}
