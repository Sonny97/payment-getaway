import { Component, OnInit, Inject, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ModelProduct } from 'app/models/product.model';
import { PublicationComponent } from '../publication/publication.component';
import { ProductInterationService } from 'app/services/productInteration.service';
import { HttpClient } from '@angular/common/http'


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
  constructor( 
    private _productInteractionService: ProductInterationService,
    private http: HttpClient) { }

  
  ngOnInit() {    
    if(JSON.parse(localStorage.getItem('list-publication')) != null){
      this.fullList = true
    }    
  }
  
  // CRUD Productos
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

  selectedFile: File = null;
  public image: any;


  public onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    if (this.selectedFile) {
      return this.upload();
    }
  }

  upload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    console.log(fd)
    this.http.post('http://localhost:4200/sales', fd).subscribe((res: any) => {
      this.image = res.data;
    }, (err: any) => {
        // Show error message or make something.
    });
  }

}
