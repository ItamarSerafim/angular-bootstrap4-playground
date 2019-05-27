import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/user/user.service';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { AppValidators } from '../../core/utils/app.validators';
import { Router } from '@angular/router';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
/*
  x. Inject the entity service
  x. Inject formbuilder
  x. Create a formGroup and its controls
    x. Validations for the controls
  x. Submiting form:
    x. Check if form is valid
    x. If form.isValid, submiti it
    else show errors to the user
  x.

*/
export class RegisterComponent implements OnInit {
  public form: FormGroup;
  isWaiting = false;
  model: {
    email: string;
    password: string;
  };

  serverMessages = {
    info: '',
    error: '',
    success: ''
  };
  showFormIsInvalid = false;

  constructor (
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {

  }

  ngOnInit () {
    window['LeForm'] = this.form = this.fb.group({
      'email': new FormControl('', [ Validators.required, Validators.maxLength(255), AppValidators.email ]),
      'password': ['', Validators.compose([Validators.required, Validators.maxLength(65), Validators.minLength(5)])],
      'confirm-password': ['']
    });

    // #Crossfield validation
    this.form.get('confirm-password').setValidators([ AppValidators.equality(this.form.get('password'))]);

    this.form.valueChanges.subscribe(value => {
      this.showFormIsInvalid = false;
    });

  }

  onSubmit() {
    if (this.form.invalid) { this.showFormIsInvalid = true; return; }
    this.isWaiting = true;
    this.serverMessages = {
      info: 'Sending data...',
      error: '',
      success: ''
    };
    const model = this.form.value;
    delete model['confirm-password'];
    this.userService.create(model)
    .subscribe(
      (result) => {  // Successful response
        debugger;
        this.serverMessages.info = '';
        // TODO: Show welcome message
        this.isWaiting = false;
        this.router.navigateByUrl('welcome-new-user');
      },
      (response) => { // Unsuccessful response
        this.isWaiting = false;
        this.serverMessages.info = '';
        this.serverMessages.error = response.error.error.message;
      }
    );
  }
  navigate() {
    this.router.navigateByUrl('welcome-new-user');
  }
}
