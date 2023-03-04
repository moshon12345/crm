import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

transform(value: string): number {
        const currentYear = new Date().getTime();
        const dob = new Date(`"${value.slice(0, 10)}"`).getTime();
        const result = (((currentYear - dob) / 31585868854));
        
        
return (+result.toFixed(2));
  }
}
