import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contactFilter'
})
export class ContactFilterPipe implements PipeTransform {

  transform(value: any, filterName: string): any {
    if (!value) return;
    if (value.length === 0 || filterName === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      let a = (item && item.displayName) ? String(item.displayName) : '';
      let b = (item && item.firstName) ? String(item.firstName) : '';
      let c = (item && item.middleName) ? String(item.middleName) : '';
      let d = (item && item.lastName) ? String(item.lastName) : '';

      if (
        (a.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (b.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (b.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (c.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (d.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
      ) {
        resultArray.push(item);
      }


    }

    return resultArray;
  }


}
