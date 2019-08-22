import { Component, OnInit, Inject, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ModelProduct } from 'app/models/product.model';
import { PublicationComponent } from '../publication/publication.component';
import { ProductInterationService } from 'app/services/productInteration.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
  providers: [ProductInterationService]
  
  
})
export class SalesComponent implements OnInit {
  public sales: any[];
  public posts: any[];

  public newProduct:boolean = false;
  public fullList:boolean = false;

  public updateProductChild = false
  public createNewProduct = false
  public updateProductObjet;

  @Output() evento = new EventEmitter;
  constructor( private _productInteractionService: ProductInterationService ) {
    
  }

  
  ngOnInit() {
    if(JSON.parse(localStorage.getItem('list-publication')) != 0){
      this.fullList = true
    }

  }

  jose(){
    window.alert('You will be notified when the product goes on sale');
  }

  public eventCreate(){
    this._productInteractionService.send('create');
  }

  public updateProduct(event){    
    this.updateProductChild = true;
    this.updateProductObjet = event
    this.newProduct = true;
  }

  public createdProduct(){
    this.newProduct = true;
    this.createNewProduct = true
    localStorage.setItem("action","createNew")
    
  }
  public cancelProduct(){
    this.newProduct = false;
    this.fullList = true;
  }

}
