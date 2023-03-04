import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arr: any[], input: string, valueSelect: string): any[] {
    if (!arr) {
      return [];
    }

    if (!input) {
      return arr;
    }

    return arr.filter(obj => {
      for (const key in obj) {
        if (!obj[key].valueSelect) {
          continue;
        }
        console.log(obj[key].valueSelect)

        const val: string = obj[key].valueSelect.toString().toLowerCase();

        if (val.includes(input.toLowerCase())) {
          return true;
        }
      }
      return false;
    });
  }
}
