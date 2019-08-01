import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';

export interface User {
  name: string;
}

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
  
  options: User[] = [
    {name: 'Mary'},
    {name: 'Shelley'},
    {name: 'Igor'}
  ];


  _productType: User[] = []
  /*========================
  *objetos
  */
  public vehiculoObjet = {
    vehiculo: ''
  }
  filter: Observable<User[]>;
  control = new FormControl();

  ngOnInit() {

    this.filter = this.control.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      )

    this.productType = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  
  displayFn(value?: User): string| undefined {
    return value ? value.name : undefined;
  }
  private _filter(value: string): User[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }



  public productCrear(publicacion,productType) {
    this.publicacion = publicacion;
    this.catergory = true;
    switch(productType){
      case 1:
        this._productType = this.options
        break
      case 2:
        this._productType = this.options
        break
    }

  }

}
