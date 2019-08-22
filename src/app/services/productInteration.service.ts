import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductInterationService {
    private _sales = new Subject<string>();
    private _publication = new Subject<string>();

    salesEvent$ = this._sales.asObservable();
    summaryEvent$ = this._publication.asObservable();

    summarySend(message:string){
      this._publication.next(message)
    }

    send(message:string){
        this._sales.next(message);
    }
}
