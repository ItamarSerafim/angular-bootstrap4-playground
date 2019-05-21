import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavService } from './side-nav.service';
import { SideNavComponent } from './side-nav.component';
// import { SideNavContainerComponent } from './side-nav-container/side-nav-container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SideNavComponent,
    // SideNavContainerComponent
    ],
  exports: [SideNavComponent],
  providers: [SideNavService]
})
export class SideNavModule { 
  constructor(@Optional() @SkipSelf() parentModule: SideNavModule){
    
    if(parentModule) {
      throw new Error('SideNavModule is already loaded. Import it in appModule only.');
    }
  }

  public static forRoot(): ModuleWithProviders {

    return {
      ngModule: SideNavModule,
      providers: [{provide: SideNavService}]
    }

  }
}