import { Pipe, PipeTransform } from '@angular/core';
import { json } from 'stream/consumers';
import { Employee } from './employee/employee';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(value: Employee[], args?: string): Employee[] | null {
    if (!value) return null;
    if (!args) return value;
    args = args.toLowerCase();

    return value.filter((item: Employee) => {
      return JSON.stringify(item).toLowerCase().includes(args);
    })
  }

}
