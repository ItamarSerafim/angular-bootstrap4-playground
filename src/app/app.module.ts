import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; 

import { LinkService } from './core/site-navigation/link.service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faSquare as farSquare } from '@fortawesome/free-regular-svg-icons';

import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

import { AppComponent } from './app.component';


@NgModule({
  imports:      [ 
    CommonModule,
    BrowserModule,  
    LayoutModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    AppRoutingModule 
  ],
  declarations: [ 
    AppComponent, 
    HomeComponent, 
    ContactComponent,
    LoginComponent,
    SideMenuComponent
  ],
  providers: [LinkService],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  constructor(){ library.add(fas, farSquare); }
} 








