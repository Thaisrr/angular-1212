import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../utils/services/authentication.service";
import {UserLogin} from "../../../utils/types/UserLogin";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login_form = new FormGroup({
    email: new FormControl<string>('lindsay.ferguson@reqres.in', [Validators.required, Validators.email]),
    password: new FormControl<string>('')
  });

  error?: string;

  constructor(private authService: AuthenticationService) {}

  login() {
    if(this.login_form.valid) {
      const user = this.login_form.value as UserLogin;
      this.authService.login(user).subscribe({
        next: ({token}) => this.authService.setToken(token),
        error: res => this.error = res?.error?.error || `Impossible de vous connecter`,
        complete: () => this.error = undefined
      })
    }
  }


}
