import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  OnDestroy,
  AfterViewInit,
  VERSION
} from "@angular/core";
import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";
import { Link, LinkService } from './core/site-navigation/link.service';
import { AngularFireDatabase } from "@angular/fire/database";

import { SideNavComponent } from "./shared/side-nav/side-nav.component";
import { SideMenuComponent } from "./components/side-menu/side-menu.component";

type BreakPoint = { text: string; val: boolean };
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  name = "Angular";
  ngVersion = VERSION.full;
  windowWidth: number;
  windowWidthGt768 = false;

  sideMenuLinks: Link[];
    // .filter(item => item.showAt === "side-menu")
    // .sort((a, b) => (a.order > b.order ? 1 : -1));
  private breakpointObserverSubscription;

  @ViewChild("sideNav") sideNav: SideNavComponent;
  @ViewChild("sideMenus") sideMenus: SideMenuComponent;
  // TODO: remove this feature
  breakPoints: BreakPoint[] = [];

  // Side navigation
  sideNavOpen = true;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private linkService: LinkService
  ) {}

  ngAfterViewInit() {
    this.sideNav.close(null);
    this.breakpointObserverSubscription = this.breakpointObserver
      .observe([
        "(min-width: 768px) and (max-width: 1024px)" /* Sidenav: open - Menu: icon */,
        "(min-width: 980px)" /* Sidenav: open - Menu: icon+text */,
        "(min-width: 1025px)" /* Sidenav: open, side - Menu: icon+text */
      ])
      .subscribe((state: BreakpointState) => {
        // TODO: remove.
        this.breakPoints = Object.keys(state.breakpoints)
          .map(str => ({ text: str, val: state.breakpoints[str] }))
          .filter(function(item: BreakPoint) {
            return item.val;
          });

        console.log(state);

        this.sideMenus.showLabels = true;
        this.sideNav.mode = "over";
        this.sideNav.close(null);

        if (state.matches) {
          if (state.breakpoints["(min-width: 768px)"]) {
            this.sideNav.mode = "side";
          } else {
            this.windowWidthGt768 = false;
          }

          if (state.breakpoints["(min-width: 768px) and (max-width: 1024px)"]) {
            this.sideNav.mode = "side";
            this.sideMenus.showLabels = false;
            this.sideNav.open();
          }

          if (state.breakpoints["(min-width: 1025px)"]) {
            this.windowWidthGt768 = true;
            this.sideNav.mode = "side";
            this.sideMenus.showLabels = true;
            this.sideNav.open();
          }
        }
      });
  }

  ngOnInit() {
    // TODO: filter links by 'showAt' =  'side-menu'
    this.linkService.getAll().subscribe(response => {
      this.sideMenuLinks = response;
    });
  }

  toggleSideNav() {
    this.sideNav.toggle();
  }

  ngOnDestroy() {
    this.breakpointObserverSubscription &&
      this.breakpointObserverSubscription.unsubscribe();
  }
}
