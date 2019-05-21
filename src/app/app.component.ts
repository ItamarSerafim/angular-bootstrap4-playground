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

  private breakpointObserverSubscription;

  breakPoints: BreakPoint[] = [];

  // Side navigation
  sideNavOpen = true;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private linkService: LinkService
    // private photoService: PhotoService
  ) {}

  ngAfterViewInit() {
    // this.sideNav.close(null);
    this.breakpointObserverSubscription = this.breakpointObserver
      .observe([
        "(min-width: 768px) and (max-width: 1024px)" /* Sidenav: open - Menu: icon */,
        "(min-width: 980px)" /* Furture: Sidenav: open - Menu: icon+text */,
        "(min-width: 1025px)" /* Furture: Sidenav: open, side - Menu: icon+text */
      ])
      .subscribe((state: BreakpointState) => {
        this.breakPoints = Object.keys(state.breakpoints)
          .map(str => ({ text: str, val: state.breakpoints[str] }))
          .filter(function(item: BreakPoint) {
            return item.val;
          });
      });
  }

  ngOnInit() {
    // TODO: filter links by 'showAt' =  'side-menu'
    this.linkService.getAll().subscribe(response => {
      this.sideMenuLinks = response;
    });
  }

  toggleSideNav() {
  }

  ngOnDestroy() {
    this.breakpointObserverSubscription &&
      this.breakpointObserverSubscription.unsubscribe();
  }
}
