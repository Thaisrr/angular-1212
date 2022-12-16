import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../utils/services/authentication.service";
import {UserLogin} from "../../../utils/types/UserLogin";
import {Alert} from "../../../utils/types/Alert";
import {AlertService} from "../../../utils/services/alert.service";
import {Router} from "@angular/router";

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

  constructor(private authService: AuthenticationService, private alertService: AlertService, private router: Router) {}

  login() {
    if(this.login_form.valid) {
      const user = this.login_form.value as UserLogin;
      this.authService.login(user).subscribe({
       /*next: ({token}) => this.authService.setToken(token),
       error: res => {
          const err = res?.error?.error || `Impossible de vous connecter`;
          this.error = err;
          this.alertService.create({text: err, level: 'error'})
        },
        complete: () => this.error = undefined
        */
      })
    }
  }


}
