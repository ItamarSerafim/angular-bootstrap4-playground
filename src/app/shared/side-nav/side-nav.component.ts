import { Component, OnInit, Input } from '@angular/core';

import { SideNavService } from './side-nav.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  // TODO: implement sidenav modes: over | push | side
  public mode: string; // Not implemented yet
  @Input()
  position: 'start' | 'end';

  constructor(public sideNavService: SideNavService) { }

  open(){
    this.sideNavService.opened = true;
  }



  backDropClick(event) {
    if (  event && event.target.classList.contains('back-drop')) {
      this.sideNavService.opened = false;
    }
  }
  public close(event){
    this.sideNavService.opened = false;
  }

  toggle(){
    this.sideNavService.opened = !this.sideNavService.opened;
    console.log('Test:\t',this.sideNavService.opened)
  }
  ngOnInit() {
  }

}