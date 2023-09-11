import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false,
})
export class SortPipe implements PipeTransform {
  transform(value: any, propname: string): unknown {
    return value.sort((a: any, b: any) => {
      if (a[propname] > b[propname]) {
        return 1;
      } else {
        return -1;
      }
    });
  }
}
