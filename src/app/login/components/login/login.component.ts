import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/login/services/login.service';
import { Router } from '@angular/router';
import { UserService } from 'app/login/services/user.service';
import { MatSnackBar } from '@angular/material';
import { User } from './user/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public hide = true;
  public year = new Date().getFullYear();

  /* yxowaho-5673@yopmail.com
  contrasena : 123456 */

  constructor(
    private loginService: LoginService,
    private router: Router,
    private userService: UserService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    const user = this.userService.getUserLoggedIn() == null ? {} : this.userService.getUserLoggedIn();
    if (user.tkn) {
      this.navigate()
    }
  }

  logIn(username: string, password: string, event: Event) {
    event.preventDefault(); // Avoid default action for the submit button of the login form
    // Calls service to login user to the api rest
    this.loginService.login(username, password).subscribe(
      res => {
        if (res.message) {
          this._snackBar.open(res.message, '😭', {
            verticalPosition: 'top',
            duration: 5000
          })
        } else {
          const u: User = { username: username, tkn: res.result.access_token};
          this.userService.setUserLoggedIn(u),
          this.navigate()
        }
      },
      error => {
        console.error(error);
      },
    );

  }

  navigate() {
    this.router.navigateByUrl('/overview');
  }

}
