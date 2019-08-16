import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Headers,RequestOptions } from "@angular/http";
import { ModelProduct } from 'app/models/product.model';




@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private headers = new Headers({'Content_Type':'application/json'});
  private options = new RequestOptions({headers:this.headers})

  private URL = 'http://127.0.0.1:54600'
  constructor(private http: HttpClient) { }

  /**
   * getProduct NODEJS
   */
  public getProduct(id): Observable<any> {
    return this.http.get<any>(`http://10.4.28.9:4446/Producto/info?id=${id}`);
  }

   /**
   * getProduct PYTHON
   */
  public getProductList(): Observable<any>{
    return this.http.get<ModelProduct>(`${this.URL}/router_product`)
  }

  public deleteProduct(product):Observable<any>{ 
    console.log("jose",product)
    return this.http.delete("http://127.0.0.1:54600/router_product", product);
  }
}
