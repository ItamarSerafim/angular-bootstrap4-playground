import { Injectable } from '@angular/core';

@Injectable({providedIn: "root"})
export class SideNavService {
  public opened = false;
  public mode: 'side' | 'over';
  public test = 'Test do serviço';
  constructor() { }

  public toggle(){
    this.opened = ! this.opened;
  }
  
  open(){
    this.opened = true;
  }
  close(){
    this.opened = false;
  }
}