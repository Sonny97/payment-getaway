import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {
  isLinear = true;
  /*========================
  *Campos de formulario
  */
  productType: FormGroup;
  secondFormGroup: FormGroup;
  
  public publicacion = "";
  public catergory:boolean = false; 

  constructor(  private _formBuilder: FormBuilder ) {  }
  /*========================
  *Prueba de listas
  */
  public vehiculos: any[] = ["Carro", "Motos", "Lanchas"] 
  public inmuebles: any[] = ["Casa", "Apartamentos"]
  _productType: any[] = []
  /*========================
  *objetos
  */
  public vehiculoObjet = {
    vehiculo: ''
  }


  ngOnInit() {
    this.productType = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  public productCrear(publicacion,productType) {
    this.publicacion = publicacion;
    this.catergory = true;
    switch(productType){
      case 1:
        this._productType = this.vehiculos
        break
      case 2:
        this._productType = this.inmuebles
        break
    }

  }
}
