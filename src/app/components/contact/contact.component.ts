import { Component } from '@angular/core';

@Component ({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  
  firstName: String;
  lastName: String;
  email: String;
  message:String;
  formDataStr: String;

  submit(){
    this.formDataStr = JSON.stringify({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      message: this.message
    }, null, 3)
  }
}