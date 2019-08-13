import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModelProduct } from 'app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class PublicCategoryserviceService {

  constructor(private http: HttpClient) { }
  private URL = 'http://127.0.0.1:54600'

  /**
   * Request of plublic Categories
   */
  public getPublicCategory():Observable<any>{
    return this.http.get<ModelProduct>(`${this.URL}/router_planesCategory`);
  }
  
  public postProduct(product:ModelProduct){
    console.log('POST',product)
    return this.http.post(`${this.URL}/router_planesCategory`,product)
  }
  

}
