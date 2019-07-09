import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from 'app/login/services/login.service';
import { UserService } from 'app/login/services/user.service';
import { AngularMaterialModule } from 'app/angular-material/angular-material.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  providers: [
    LoginService,
    UserService
  ]
})
export class LoginModule { }
