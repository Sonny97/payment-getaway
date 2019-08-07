import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import { PublicCategoryserviceService } from 'app/services/publicCategory.service';
import { THIS_EXPR, ThrowStmt, ReturnStatement } from '@angular/compiler/src/output/output_ast';
import { User } from 'app/login/components/login/user/user.model';
import { ModelPublication } from './publication.model';


@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {
   /*========================
  *  Variables Inicializacion.
  */
  public publicCategory: ModelPublication[];
  public listCategory: ModelPublication[];
  public result: any // Resultado Hijos
  private category: ModelPublication;
  salir: boolean = false;
  public selectClient: any;

  isLinear = true;

  /*========================
  *Campos de formulario Validacion
  */
  parentProductType: FormGroup = this._formBuilder.group({
    firstControl: '',
  });
  childProductType: FormGroup = this._formBuilder.group({
    secondControl: '',
  })

  

  constructor( 
    private _formBuilder: FormBuilder
    ,private  publicCategoryserviceService : PublicCategoryserviceService
  ) {this.category = new ModelPublication()}

  ngOnInit() {
    this.getPublication();
    
    

 
  }


  parentFilter: Observable<ModelPublication[]>;
  secondFilter: Observable<ModelPublication[]>;

  /*========================
  * Funciones para los filtros
  */
  public getPublication(){
    this.publicCategoryserviceService.getPublicCategory().subscribe
    (data => {
      this.publicCategory = data.filter(parenth => parenth)      
      sessionStorage.setItem("listCategory",JSON.stringify(this.publicCategory))
    }
    )
    this.filter_parent();
        
  }

 //  Filtro padre
  public filter_parent(){
    this.publicCategory = JSON.parse(sessionStorage.getItem("listCategory"))
    this.listCategory = this.publicCategory.filter(items => items.parent_id == null)
    this.parentFilter = this.parentProductType.get('firstControl')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter_parent(value, this.listCategory))
      );     
  }

  private _filter_parent(value: string, listArray): ModelPublication[] {   
    if(value){
      const filterValue = value.toLowerCase();
      sessionStorage.setItem("listCategoryChild", JSON.stringify(listArray.filter(items => items.name.toLowerCase().indexOf(filterValue) === 0)));
      
      return listArray.filter(items => items.name.toLowerCase().indexOf(filterValue) === 0)
    }
    else{
      return listArray
    }
  }

  // Filtro hijos.
  public filter_child(){
    this.publicCategory = JSON.parse(sessionStorage.getItem("listCategory"))
    this.result = JSON.parse(sessionStorage.getItem("listCategoryChild"))
    for(var i of this.result){
      this.result = i.id
      console.log("listCategoryChild : ",this.result)
    }
    this.listCategory = this.publicCategory.filter(items => items.parent_id == this.result)    
    this.secondFilter = this.childProductType.get('secondControl')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter_child(value, this.listCategory))
      );
  }
  private _filter_child(value: string, listArray): ModelPublication[] {   
    if(value){
      const filterValue = value.toLowerCase();
      sessionStorage.setItem("listCategoryChild", JSON.stringify(listArray.filter(items => items.name.toLowerCase().indexOf(filterValue) === 0)));
      
      return listArray.filter(items => items.name.toLowerCase().indexOf(filterValue) === 0)
    }
    else{
      return listArray
    }
  }
  

}
