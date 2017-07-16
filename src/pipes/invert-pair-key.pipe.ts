import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'invertPairKey'
})
export class InvertPairKeyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value.indexOf('_') > 1 ) {
      const split = value.split('-');
      value = split[1] + '_' + split[0];
    }else if (value.indexOf('-') > 1 ) {
      const split = value.split('-');
      value = split[1] + '-' + split[0];
    }
    return value;
  }
}
