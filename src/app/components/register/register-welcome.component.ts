import { Component } from '@angular/core';
@Component({
  template: `
  <div aria-label="Welcome dialog" flex="55" class="component-wrap mt-5">
    <h3 class="dialog-header">
      <div class="toolbar-tools">
        <h2>Welcome!</h2>
      </div>
    </h3>

    <div class="dialog-content" layout-padding>
      <div>
        <p>Now you are part of this community.</p>
        <p>
          There is just one more step. We sent you a confirmation
          <i class="mdi mdi-email-outline"></i>email with a link to
          <b>activate your subscription</b>.
        </p>
      </div>
    </div>

    <div class="dialog-actions">
      <a routerLink="../login" class="text-primary">
        Ok, let me log in.
      </a>
    </div>
  </div>
  `,
  styles: [`
  .component-wrap {
      max-width: 600px;
      margin: 0 auto;
    }
  `]
})
export class RegisterWelcomeComponent {

}
