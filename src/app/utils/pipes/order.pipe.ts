import { Pipe, PipeTransform } from '@angular/core';
import {OrderDirection} from "../types/Parameters";

@Pipe({
  name: 'order',
  pure: true
})
export class OrderPipe implements PipeTransform {

  transform(value: string[], direction?: OrderDirection ): string[] {
    console.log('In pipe Order')
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
