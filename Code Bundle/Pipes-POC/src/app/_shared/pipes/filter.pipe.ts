import { Pipe, PipeTransform } from '@angular/core';
import { Server } from '../models/server.model';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: Server[], ...args: string[]): Server[] {
    if (args[0] && args[1]) {
      const filteredServers: Server[] = value.filter(e => e[args[1]] === args[0]);
      console.log(filteredServers);
      return filteredServers;
    }
    return value;
  }

}
