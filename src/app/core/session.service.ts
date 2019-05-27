import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from './user/models';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
user: User;
isLogged = false;
redirectUrl = '';
constructor(private route: Router, private activatedRoute: ActivatedRoute
) {
  const token = localStorage.getItem('usertoken');
  const storage = !!token ? localStorage : sessionStorage;
  this.user = {
    id: +storage.getItem('userid'),
    username: storage.getItem('username'),
    token: token || storage.getItem('usertoken')
  };
  this.isLogged = !!this.user.token;

  this.activatedRoute.queryParams.subscribe(params => {
    this.redirectUrl = params['redirect'];
    console.log('Logging navigation from sessionService', params);
  });

}

get isLoggedIn(): boolean {
  return this.isLogged || !!localStorage.getItem('usertoken');
}

public getUser() {

}

signIn(user: User, rememberme = false) {
  debugger;
  this.user = user;
  const storage = rememberme ? localStorage : sessionStorage;
  storage.setItem('usertoken', user.token);
  storage.setItem('username', user.username);
  storage.setItem('userid', user.id + '');
  this.isLogged = true;
  if (this.redirectUrl) { this.route.navigateByUrl(this.redirectUrl); }
  // TODO: Later, user permissions and more info
}

signout() {
  localStorage.removeItem('usertoken');
  localStorage.removeItem('username');
  localStorage.removeItem('userid');
  sessionStorage.removeItem('usertoken');
  sessionStorage.removeItem('username');
  sessionStorage.removeItem('userid');
  this.isLogged = false;
  this.route.navigate(['home']);
  debugger;
  // TODO: Show a dismissible snackbar for the user saing it is logged out: 'You\'ve logged out successfully'

}

}
