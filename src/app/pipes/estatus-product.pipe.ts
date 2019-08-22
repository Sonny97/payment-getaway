import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estatusProduct',
  pure: false
})
export class EstatusProductPipe implements PipeTransform {

  transform(value: number): any {    
    switch(value){
      case 0: return "Pausado";
      case 2: return "Activo";
    }    
  }
}
