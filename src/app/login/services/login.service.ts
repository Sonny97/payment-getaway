import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

 

  constructor(private http: HttpClient) { }

  login(username: string, pwd: string): Observable<any> {
    console.log(username, pwd)
    return this.http.post<any>('https://kieroapi.net/Users/Kiero-login', {
      email: username,
      password: pwd,
    })
  }
  
}
