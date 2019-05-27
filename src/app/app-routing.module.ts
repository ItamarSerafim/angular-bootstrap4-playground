import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterWelcomeComponent } from './components/register/register-welcome.component';


const routes: Routes = [
  {path: 'register', component: RegisterComponent },
  {path: 'welcome-new-user', component: RegisterWelcomeComponent },
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
