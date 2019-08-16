import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModelProduct } from 'app/models/product.model';
import { Headers,RequestOptions } from "@angular/http";
import { RestResponse } from 'app/models/restResponse.model';


const httpOptions = {
  headers : {'Content-Type':'application/json'}
};

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class PublicCategoryserviceService {

  private headers = new Headers({'Content_Type':'application/json'});
  private options = new RequestOptions({headers:this.headers})

  constructor(private http: HttpClient) { }
  private URL = 'http://127.0.0.1:54600'

  /**
   * Request of plublic Categories
   */
  public getPublicCategory():Observable<any>{
    return this.http.get<ModelProduct>(`${this.URL}/router_planesCategory`);
  }

  

  public postProduct(product:ModelProduct){    
    return this.http.post("http://127.0.0.1:54600/router_product",product);
  }

  
  

}
