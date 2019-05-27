import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export class AppValidators {
  static conditional(validatorFn: () => ValidatorFn, shouldValidate: () => boolean): ValidatorFn {
    return (control: AbstractControl) => shouldValidate() ? validatorFn()(control) : null;
  }


  static equality(equalitySource: AbstractControl): ValidatorFn {
    return (control: AbstractControl): {[error: string]: any; } => {

      if (!control.value) { return null; }


      const error = { equality: true };
      const diff = equalitySource.value !== control.value;
      if ( equalitySource.dirty && diff ) {
        return error;
      }

      return null;
    };
  }



  static get email(): ValidatorFn | null {
    return (control: AbstractControl): {[error: string]: any; } => {

      if (!control.value) { return null; }

      /* tslint:disable:max-line-length */
      // Refer to https://emailregex.com/
      const match = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(control.value);
      /* tslint:enable:max-line-length */
      if ( !match ) {
        return { email: true };
      }

      return null;
    };
  }


}
