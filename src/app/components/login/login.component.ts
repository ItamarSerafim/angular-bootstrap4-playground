import { Component } from '@angular/core';
import { LoginService } from '../../core/login.service';
import { SessionService } from '../../core/session.service';
import { User } from '../../core/user/models';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // Autofocus on first input
  // Scroll intoViewIfNeeded
  // Server messages...
    // Waiting server to respond(debatable)


  // Validations of inputs...
    /* Messages: Email is not valid

    */

  // Redirect to(if needed)
    /*
      x. Login is Successfull
        Redirect
        Save user token in the session.

      x. Login is unsuccessfull
        Stay in the page
        Show server message: a.If the user didn't his subscription, login failed, etc. Not all cases are mapped now

    */
   constructor(private loginService: LoginService, private sessionService: SessionService) { }
  login: {username: string; password: string } = {
    username: '',
    password: ''
  };

  onSubmit() {
    // TODO: FIXME: Change this to send username the coirrect way
    this.login['email'] = this.login.username;
    this.loginService.login(this.login)
    .subscribe(( response ) => {
      debugger;

      // save response.id to sessionService.save(response.id)
      const user = {
        id: response['userId'],
        username: this.login.username,
        token: response['id']
      };

      this.sessionService.signIn(user);
    });
  }


}
