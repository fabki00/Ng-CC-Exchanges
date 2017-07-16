import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'underscoreToDash'
})
export class UnderscoreToDashPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.replace('_', '-');
  }

}