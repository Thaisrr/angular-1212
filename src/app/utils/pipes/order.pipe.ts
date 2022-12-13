import { Pipe, PipeTransform } from '@angular/core';
import {OrderDirection} from "../types/Parameters";

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(value: string[], direction?: OrderDirection ): string[] {
    const tab = [...value];

    if(direction === 'asc') {
      return tab.sort();
    }
    if(direction === 'desc') {
      return tab.sort().reverse();
    }
    return tab;
  }


}
