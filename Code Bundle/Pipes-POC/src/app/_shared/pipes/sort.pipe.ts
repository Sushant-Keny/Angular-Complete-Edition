import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(values: any[], ...args: string[]): any[] {
    const sortBy = args[0];
    const data = [...values];

    let sortedArray: any[];

    if (values.length) {
      const type = typeof values[0][sortBy];

      switch (type) {
        case 'string':
          sortedArray = this.sortStrings([...data], sortBy);
          break;

        case 'number':
          sortedArray = this.sortNumbers([...data], sortBy);
          break;

        case 'undefined':
          sortedArray = data;
          break;

        default:
          break;
      }

      return sortedArray;
    }

    return sortedArray;
  }

  private sortStrings(array, key) {
    if (!key) {
      array.sort();
      return array;
    }

    array.sort((a, b) => {
      const propertyA = a[key].toUpperCase();
      const propertyB = b[key].toUpperCase();

      if (propertyA < propertyB) {
        return -1;
      }

      if (propertyA > propertyB) {
        return 1;
      }

      return 0;
    });

    return array;
  }

  private sortNumbers(array, key) {
    if (!key) {
      array.sort((a, b) => a - b);
      return array;
    }

    array.sort((a, b) => a[key] - b[key]);
    return array;
  }

}
