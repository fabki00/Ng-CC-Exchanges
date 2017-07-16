import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slashToDash'
})
export class SlashToDashPipe implements PipeTransform {

  transform(value: any, args?: any): any {
     return value.replace('/', '-');
  }

}
