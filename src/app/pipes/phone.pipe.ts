import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'phone'})
export class PhonePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    value = value.slice(2, value.length);
    return `${value.slice(0, 2)} ${value.slice(2, 7)} ${value.slice(7, value.length)}`;
  }

}
