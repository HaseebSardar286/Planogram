import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  imports: [FormsModule, RouterLink],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent {
  forgotPasswordEmail = '';
  userForgotPasswordEmail(values: any) {
    console.log(values);
    this.forgotPasswordEmail = values;
  }
}
