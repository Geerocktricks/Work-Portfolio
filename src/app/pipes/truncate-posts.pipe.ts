import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncatePosts'
})
export class TruncatePostsPipe implements PipeTransform {

  transform(value: string): string {
    return value.split(' ').slice(0, 4).join(' ') + '...'
  }

}
