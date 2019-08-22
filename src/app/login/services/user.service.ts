import { Injectable } from '@angular/core';
import { User } from 'app/login/components/login/user/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductInterationService } from 'app/services/productInteration.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isUserLoggedIn;
  public usserLogged: User;

  constructor(private http: HttpClient,private _productInteractionService: ProductInterationService) {
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(user: User) {
    this.isUserLoggedIn = true;
    this.usserLogged = user;
    localStorage.setItem('currentUser', JSON.stringify(user));    
   
  }

  getUserLoggedIn() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  deleteUserLoggedIn() {
    localStorage.removeItem('currentUser');
  }

  /**
  * getUsers PYTHON
  */
  public getUsers(): Observable<any>{
  return this.http.get<any>('http://127.0.0.1:54600/router_userss')
}
}
