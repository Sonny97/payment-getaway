import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicCategoryserviceService {

  constructor(private http: HttpClient) { }

  /**
   * Request of plublic Categories
   */
  public getPublicCategory():Observable<any>{
    return this.http.get<any>(`http://127.0.0.1:54600/router_planesCategory`)
  } 

}
