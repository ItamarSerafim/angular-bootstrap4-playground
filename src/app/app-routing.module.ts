import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent }, 
  { path: 'home', component: HomeComponent}
];

@NgModule ({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
