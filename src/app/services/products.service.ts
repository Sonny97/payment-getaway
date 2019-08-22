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
  /**
  * Delete Product PYTHON
  */
  
  
  public deleteProduct(product): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.delete<any>('http://127.0.0.1:54600/router_product',product)
  }
 
  /**
  * Update Product PYTHON
  */
  public UpdateProduct(product:ModelProduct){
    return this.http.post(`${this.URL}/router_product`,product);
  }
  /**
  * Stop Product PYTHON
  */
  public stopProduct(product:ModelProduct){
    return this.http.put(`${this.URL}/router_product`,product)
  }
}


