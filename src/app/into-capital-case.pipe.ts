import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'intoCapitalCase'
})
export class IntoCapitalCasePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value.toLocaleUpperCase();
  }

}
