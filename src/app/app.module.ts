import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { LinkService } from './core/site-navigation/link.service';

import { SideNavModule } from './shared/side-nav/side-nav.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faSquare as farSquare } from '@fortawesome/free-regular-svg-icons';

import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { SideMenuComponent, SideMenuItemComponent } from './components/side-menu/side-menu.component';

import { AppComponent } from './app.component';
import { LoginService } from './core/login.service';
import { RegisterComponent } from './components/register/register.component';
import { RegisterWelcomeComponent } from './components/register/register-welcome.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    LayoutModule,
    HttpClientModule,
    SideNavModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  declarations: [
    SideMenuItemComponent,
    SideMenuComponent,
    AppComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    RegisterWelcomeComponent,
    RegisterComponent,

  ],
  providers: [LinkService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(fas, farSquare);
  }
}
