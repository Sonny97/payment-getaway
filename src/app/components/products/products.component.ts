import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ProductsService } from 'app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public panelOpenState = false;
  public availableEdit = false;
  public product;
  public id: number;

  constructor(
    private productsService: ProductsService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  /**
   * getProduct
   */
  public getProduct() {
    this.productsService.getProduct(this.id).subscribe(
      res => this.product = res.Resultados,
      err => console.log(err)
    )
  }
}
