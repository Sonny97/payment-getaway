import { Component, OnInit, ViewChild, Input, Output,EventEmitter } from '@angular/core';
import { ProductsService } from 'app/services/products.service';
import { MAT_DIALOG_DATA, MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { ModelProduct } from 'app/models/product.model';
import { User } from 'app/login/components/login/user/user.model';
import { JsonPipe } from '@angular/common';





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
  displayedColumns: string[] = ['Titulo','Descripcion','Precio_descuento','Accion'];
  public whatchProduct: boolean = false;
  @Output() _updateProduct = new EventEmitter;
  @Output() _deleteProduct = new EventEmitter;
  

  // Constructor y Ng Init
  constructor(
    private productsService : ProductsService,
  ) {
    this.productObject = new ModelProduct;
  }

  ngOnInit() {
    // Functions
    this.getProductList();
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
        if(!response){return}
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
    console.log("fasdfsadf : ", product.sku)
    localStorage.setItem("action","upDate")
    sessionStorage.setItem("updateProduct", JSON.stringify(product));
  }

  public deleteProduct(product){    
    product.Categoria_id = 2;
    product.Estado  = 1; // ( Requerido )
    product.Creado_Por = 1; // ( Requerido )
    product.Modificado_Por = 1; // ( Requerido )
    product.Fecha_Creacion = "2019-05-21 15:20:00" ; // ( Requerido )
    product.Fecha_Actualizacion = "2019-05-21 15:20:00"; // ( Requerido )
    this.productsService.deleteProduct(product).subscribe(
      (response)=>{console.log(response)},
      (error)=>{console.log(error)}
    )
  }
}
 

