import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductInterationService {
    private _sales = new Subject<string>();
    salesEvent$ = this._sales.asObservable();

    send(message:string){
        this._sales.next(message);
    }
}
