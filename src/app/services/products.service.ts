import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  /**
   * getProduct
   */
  public getProduct(id): Observable<any> {
    return this.http.get<any>(`http://10.4.28.90:4446/Producto/info?id=${id}`);
  }
}
