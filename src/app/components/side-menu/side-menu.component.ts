import {
  Component,
  Input,
  Output,
  OnInit,
  ViewChild,
  EventEmitter,
  ElementRef
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Link } from '../../core/site-navigation/link.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  @Input() links: Link[] = [];
  filteredLinks: Link[];
  @Input() expandido: Boolean;
  @Input() config: any;
  @Input() showLabels = true;
  @Input() showIcons = true;
  @Output() requestHideMenu = new EventEmitter();
  @ViewChild('searchBox') searchBox: ElementRef;
  topComponent = 'main-ctrl-bar'; // 'search-bar';
  constructor(private _sanitizer: DomSanitizer) {}

  focusSearchBox() {
    this.topComponent = 'search-bar';
    this.searchBox.nativeElement.focus();
  }
  ngOnInit() {
    this.filteredLinks = this.links;
    // TODO: implement save to server
    // if (this.menuItems.length <= 0) {
    //     this.menuService.list().toPromise().then((menu: MenuItem[]) => {
    //       this.menuItems = menu;
    //       this.cacheService.setarMenu(menu);
    //     }
    //   );
    // }
  }

  onRequestHideMenu() {
    this.requestHideMenu.emit();
  }

  clearLinksFilter() {
    this.filteredLinks = this.links;
    this.searchBox.nativeElement.value = '';
    this.topComponent = '';
  }
  searchBoxOnBlur($event) {
    const val = ($event.target.value || '').trim();
    if ($event.target.value) {
      return;
    }
    this.filteredLinks = this.links;
    this.topComponent = '';
  }

  filterLinks(term: string) {
    console.log(term);
    let termStr = (term || '').trim().toLowerCase();
    if (!termStr) {
      this.filteredLinks = this.links;
      return true;
    }
    this.filteredLinks = this.links.filter((link: Link) => {
      return (link.title || '').toLowerCase().indexOf(termStr) > -1;
    });
    if ( this.filteredLinks && this.filteredLinks.length === 0 ) {
      const link = new Link({title: 'Nothing found!', id: 0, path: '#', icon: 'unlink'});
      this.filteredLinks.push(link);
    }
  }

  // TODO: implement image icon
  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }

  // Accordion Menu type
  open(menuItem) {
    const expanded = menuItem.expanded;
    this.links.forEach(item => (item.expanded = false));
    menuItem.expanded = !expanded;
  }
}

// ==============================================
@Component({
  selector: 'app-sub-menu',
  template: `
    <ul class='list-group submenu'>
      <li class='list-group-item flex-row' *ngFor='let link of menuItems'>
        <a href='' class='btn link-item-wrap'>
          <span class='btn menu-icon'
            ><fa-icon [icon]='link.icon'></fa-icon
          ></span>
          <span class='menu-item-text'>{{ link.title }}</span>
        </a>
      </li>
    </ul>
  `,
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuItemComponent extends SideMenuComponent {
  @Input()
  menuItems: any[] = [];

  constructor(_sanitizer?: DomSanitizer) {
    super(undefined);
  }
}
