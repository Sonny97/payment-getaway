import { Component, OnInit, ViewChild, Input, Output,EventEmitter } from '@angular/core';
import { ProductsService } from 'app/services/products.service';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { ModelProduct } from 'app/models/product.model';
import { UserService } from 'app/login/services/user.service';
import { ProductInterationService } from 'app/services/productInteration.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.scss']
})
export class PublicationListComponent implements OnInit {
  // Variables
  public data:any;
  public products : ModelProduct[]
  public productObject : ModelProduct;
  displayedColumns: string[] = ['Titulo','Precio','Estado','Accion'];
  public usersList_Id: any;
  public estatus_data:string = '';
  public product_estatus:boolean = false;
  
  public whatchProduct: boolean = false;
  @Output() _updateProduct = new EventEmitter;
  @Output() _deleteProduct = new EventEmitter;
  closeResult: string;
  

  // Constructor y Ng Init
  constructor(
    private productsService : ProductsService,
    private users:UserService,
    public dialog: MatDialog,
    private _productInterationService: ProductInterationService,
    private modalService: NgbModal
  ) {
    this.productObject = new ModelProduct;
  }

  ngOnInit() {
    // Functions
    this.getProductList();
   
    this._productInterationService.summaryEvent$.subscribe(
      (message)=>{
        if(message=="Log"){
          console.log("Ready")
          this.getProductList()
        }else{
          console.log("Ready2")
        }
      },
      (error) =>console.log(error)
    )
    this.users.getUsers().subscribe(
      (response) =>{        
        this.usersList_Id = response.filter(data=>data.email == JSON.parse(localStorage.getItem('currentUser')).username)
        localStorage.setItem('usuario',JSON.stringify(this.usersList_Id))     
      }
    )
  }
  

  // Tabla filtros y paginacion

  @ViewChild(MatPaginator,{static:false}) paginator: MatPaginator; 
  elemento =  new MatTableDataSource<ModelProduct>(this.products);
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.data.filter = filterValue;    
  }
  
  public getProductList(){
    this.productsService.getProductList().subscribe(
      (response) => {
        console.log(response)
        response = response.filter(data=>data.Creado_Por == JSON.parse(localStorage.getItem('usuario'))[0].id)
        response = response.filter(data=>data.Estado != 1)
        // Acivas 2
        // Elimindas 1
        // pausadas 0
        var summary=[
          {active:response.filter(data=>data.Estado == 2),stop:response.filter(data=>data.Estado == 0),finished:response.filter(data=>data.Estado == 1)}
        ]        
        sessionStorage.setItem('summary',JSON.stringify(summary))
        this.data = new MatTableDataSource(response)
        this.data.paginator = this.paginator = this.paginator
        this.data.applyFilter = this.applyFilter;
        this.paginator._intl.itemsPerPageLabel = 'Registros por pagina';
        this.paginator._intl.firstPageLabel = 'Primera pagina';
        this.paginator._intl.lastPageLabel = 'Ultima pagina';
        this.paginator._intl.nextPageLabel = 'Pagina adelante';
        this.paginator._intl.previousPageLabel = 'Pagina atras';
      },
      (error)=>{console.log('No hay datos')}
    )
  }
    //(response) => { console.log('Response_Product : ',response) },
    //(error) => { console.log('Error_Product : ',error) }
  public whatProduct(product){
    console.log("Poduct : ",product)
    this.whatchProduct = true;
    this.productObject = product;
  }
  public listProduct(){   
    this.whatchProduct = false;
  }

  public updateProduct(product){
    this._updateProduct.emit()
    localStorage.setItem("action","upDate")
    sessionStorage.setItem("updateProduct", JSON.stringify(product));
  }

  
  /**
  * Pausar despaudar producto
  */
  public stopProduct(product) {
    product.Estado = 0;    
    this.productsService.stopProduct(product).subscribe(
      (response)=>{
        console.log("Producto pausado"); 
        this.getProductList();
      }
    )
    this.product_estatus=true
    this.getProductList();
  }
  public activeProduct(product){
    product.Estado = 2;
    this.productsService.stopProduct(product).subscribe(
      (Response)=>{
        console.log("Producto Activo")
        this.getProductList();       
      }
    )
    this.product_estatus=false
    
  }
  /**
  * Eliminar producto
  */
  public deleteProduct(product){
    product.Estado = 1;
    this.productsService.stopProduct(product).subscribe(
      (Response)=>{
        console.log("Producto Eliminado")
        this.getProductList();
    }
    )    
  }  
}


