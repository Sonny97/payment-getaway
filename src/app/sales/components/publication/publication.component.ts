import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import { PublicCategoryserviceService } from 'app/services/publicCategory.service';
import { THIS_EXPR, ThrowStmt, ReturnStatement } from '@angular/compiler/src/output/output_ast';
import { User } from 'app/login/components/login/user/user.model';
import { ModelPublication } from './publication.model';
import { ModelProduct } from 'app/models/product.model';


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
  private product: ModelProduct;
  public selectClient: any;
  // Variables de trueOrFalse inputs categorias
  public existingCategorySecondInput: boolean = false
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
  childProductType_2: FormGroup = this._formBuilder.group({
    thirdControl: '',
  })
  childProductType_3: FormGroup = this._formBuilder.group({
    quarterControl: '',
  })
  childProductType_4: FormGroup = this._formBuilder.group({
    fifthControl: '',
  })
  childProductType_5: FormGroup = this._formBuilder.group({
    sixthControl: '',
  })
  childProductType_6: FormGroup = this._formBuilder.group({
    seventhControl: '',
  })
  public formulario:FormGroup;
  
  /*========================
  * Objeto form producto
  */
  

  // inputs
  product_name_input: boolean = false;



  // categorias existente de arbo de seleccion
  existingCategory_input0:boolean = false;
  existingCategory_input1:boolean = false;
  existingCategory_input2:boolean = false;
  existingCategory_input3:boolean = false;
  existingCategory_input4:boolean = false;
  existingCategory_input5:boolean = false;
  existingCategory_input6:boolean = false;
  btn_category_save = false // boton de guardado para las categorias

  constructor( 
    private _formBuilder: FormBuilder
    ,private  publicCategoryserviceService : PublicCategoryserviceService
  ){
    this.category = new ModelPublication();
    this.product = new ModelProduct();
  

    this.existingCategory_input1;
  }

  ngOnInit() {
    this.getPublication();
    this.saveProduct();
    
  }

  /*========================
  * insercion de los filtros
  */
  parentFilter: Observable<ModelPublication[]>;
  secondFilter: Observable<ModelPublication[]>;
  thirdFilter: Observable<ModelPublication[]>;
  quarterFilter: Observable<ModelPublication[]>;
  fifthFilter: Observable<ModelPublication[]>;
  sixthFilter: Observable<ModelPublication[]>;
  seventhFilter: Observable<ModelPublication[]>;

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
  }


 //  Filtro padre
  public filter_parent(value){
    if(this.product.name == null || this.product.name == "") {
      this.product_name_input = true
      
    }else{
      this.existingCategory_input0 = true;
      this.publicCategory = JSON.parse(sessionStorage.getItem("listCategory"))
      this.listCategory = this.publicCategory.filter(items => items.parent_id == value)
      this.parentFilter = this.parentProductType.get('firstControl')!.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter_parent(value, this.listCategory))
        );
    }
    setTimeout(
      ()=>{
        this.product_name_input=false
      },4000,this.product_name_input)

  }
  private _filter_parent(value: string, listArray): ModelPublication[] {   
    if(value){
      const filterValue = value.toLowerCase();
      sessionStorage.setItem("listCategoryChild", JSON.stringify(listArray.filter(items => items.name.toLowerCase().indexOf(filterValue) === 0)));
      this.filter_child_1()
      return listArray.filter(items => items.name.toLowerCase().indexOf(filterValue) === 0)
    }
    else{
      return listArray
    }
  }

  
  // Filtro hijos 1.
  public filter_child_1(){
    this.publicCategory = JSON.parse(sessionStorage.getItem("listCategory"))
    this.result = JSON.parse(sessionStorage.getItem("listCategoryChild"))    ;
    for(var i of this.result){
      this.result = i.id
      console.log("listCategoryChild : ",this.result)
    }
    this.listCategory = this.publicCategory.filter(items => items.parent_id == this.result)
    if(this.listCategory.length > 0){
      this.existingCategory_input1 = true
    }else{
      this.btn_category_save = true
    }
    this.secondFilter = this.childProductType.get('secondControl')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter_child(value, this.listCategory))
      );
  }
  private _filter_child(value: string, listArray): ModelPublication[] {   
    if(value){
      const filterValue = value.toLowerCase();
      sessionStorage.setItem("listCategoryChild_2", JSON.stringify(listArray.filter(items => items.name.toLowerCase().indexOf(filterValue) === 0)));
      this.filter_child_2();
      return listArray.filter(items => items.name.toLowerCase().indexOf(filterValue) === 0)
    }
    else{
      return listArray
    }
    
  }
  
  // Filtro hijo 2
  private filter_child_2(){
    this.publicCategory = JSON.parse(sessionStorage.getItem("listCategory"))
    this.result = JSON.parse(sessionStorage.getItem("listCategoryChild_2"))
    for(var i of this.result){
      this.result = i.id
      console.log("listCategoryChild : ",this.result)
    }
    this.listCategory = this.publicCategory.filter(items => items.parent_id == this.result)
    if(this.listCategory.length > 0){
      this.existingCategory_input2 = true
    }else{
      this.btn_category_save = true
    }
    this.thirdFilter = this.childProductType_2.get('thirdControl')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter_child_2(value, this.listCategory))
      );
  }
  private _filter_child_2(value: string, listArray): ModelPublication[] {   
    if(value){
      const filterValue = value.toLowerCase();
      sessionStorage.setItem("listCategoryChild_3", JSON.stringify(listArray.filter(items => items.name.toLowerCase().indexOf(filterValue) === 0)));
      return listArray.filter(items => items.name.toLowerCase().indexOf(filterValue) === 0)
    }
    else{
      return listArray
    }
  }

   // Filtro hijo 3
   private filter_child_3(){
    
    this.publicCategory = JSON.parse(sessionStorage.getItem("listCategory"))
    this.result = JSON.parse(sessionStorage.getItem("listCategoryChild_3"))
    for(var i of this.result){
      this.result = i.id
      console.log("listCategoryChild : ",this.result)
    }
    this.listCategory = this.publicCategory.filter(items => items.parent_id == this.result)
    if(this.listCategory.length > 0){
      this.existingCategory_input3 = true
    }else{
      this.btn_category_save = true
    }
    this.quarterFilter = this.childProductType_3.get('quarterControl')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter_child_3(value, this.listCategory))
      );
  }
  private _filter_child_3(value: string, listArray): ModelPublication[] {   
    if(value){
      const filterValue = value.toLowerCase();
      sessionStorage.setItem("listCategoryChild_4", JSON.stringify(listArray.filter(items => items.name.toLowerCase().indexOf(filterValue) === 0)));
      return listArray.filter(items => items.name.toLowerCase().indexOf(filterValue) === 0)
    }
    else{
      return listArray
    }
  }

  // Filtro hijo 4
  private filter_child_4(){
    this.publicCategory = JSON.parse(sessionStorage.getItem("listCategory"))
    this.result = JSON.parse(sessionStorage.getItem("listCategoryChild_4"))
    for(var i of this.result){
      this.result = i.id
      console.log("listCategoryChild : ",this.result)
    }
    this.listCategory = this.publicCategory.filter(items => items.parent_id == this.result)
    if(this.listCategory.length > 0){
      this.existingCategory_input4 = true
    }else{
      this.btn_category_save = true
    }
    this.fifthFilter = this.childProductType_4.get('fifthControl')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter_child_4(value, this.listCategory))
      );
  }
  private _filter_child_4(value: string, listArray): ModelPublication[] {   
    if(value){
      const filterValue = value.toLowerCase();
      sessionStorage.setItem("listCategoryChild_5", JSON.stringify(listArray.filter(items => items.name.toLowerCase().indexOf(filterValue) === 0)));
      return listArray.filter(items => items.name.toLowerCase().indexOf(filterValue) === 0)
    }
    else{
      return listArray
    }
  }

  // Filtro hijo 5
  private filter_child_5(){
    this.publicCategory = JSON.parse(sessionStorage.getItem("listCategory"))
    this.result = JSON.parse(sessionStorage.getItem("listCategoryChild_5"))
    for(var i of this.result){
      this.result = i.id
      console.log("listCategoryChild : ",this.result)
    }
    this.listCategory = this.publicCategory.filter(items => items.parent_id == this.result)
    if(this.listCategory.length > 0){
      this.existingCategory_input5 = true
    }else{
      this.btn_category_save = true
    }
    this.sixthFilter = this.childProductType_5.get('sixthControl')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter_child_5(value, this.listCategory))
      );
  }
  private _filter_child_5(value: string, listArray): ModelPublication[] {   
    if(value){
      const filterValue = value.toLowerCase();
      sessionStorage.setItem("listCategoryChild_6", JSON.stringify(listArray.filter(items => items.name.toLowerCase().indexOf(filterValue) === 0)));
      return listArray.filter(items => items.name.toLowerCase().indexOf(filterValue) === 0)
    }
    else{
      return listArray
    }
  }

  // Filtro hijo 6
  private filter_child_6(){
    
    this.publicCategory = JSON.parse(sessionStorage.getItem("listCategory"))
    this.result = JSON.parse(sessionStorage.getItem("listCategoryChild_6"))
    for(var i of this.result){
      this.result = i.id
      console.log("listCategoryChild : ",this.result)
    }
    this.listCategory = this.publicCategory.filter(items => items.parent_id == this.result)
    if(this.listCategory.length > 0){
      this.existingCategory_input6 = true
    }else{
      this.btn_category_save = true
    } 
    this.seventhFilter = this.childProductType_6.get('seventhControl')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter_child_6(value, this.listCategory))
      );
  }
  private _filter_child_6(value: string, listArray): ModelPublication[] {   
    if(value){
      const filterValue = value.toLowerCase();
      sessionStorage.setItem("listCategoryChild_7", JSON.stringify(listArray.filter(items => items.name.toLowerCase().indexOf(filterValue) === 0))); 
      return listArray.filter(items => items.name.toLowerCase().indexOf(filterValue) === 0)
    }
    else{
      return listArray
    }
  }
  
  public saveProduct(){
    this.formulario = this._formBuilder.group({
      'largo':[null, Validators.compose([ Validators.pattern("[0-9]{1,6}")])],
      'alto' :[null, Validators.compose([ Validators.pattern("[0-9]{1,6}")])],
      'ancho' :[null, Validators.compose([ Validators.pattern("[0-9]{1,6}")])],
      'peso' :[null, Validators.compose([ Validators.pattern("[0-9]{1,6}")])],
      'talla' :[null, Validators.compose([])],
      'color' :[null, Validators.compose([ Validators.pattern("^[a-zA-Z -/*_]{1,15}")])],

    })
  }

}
