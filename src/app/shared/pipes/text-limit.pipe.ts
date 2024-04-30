import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textLimit',
  standalone: true,
})
export class TextLimitPipe implements PipeTransform {
  limit = 30;
  transform(value: string, ...args: unknown[]): string {
    if (value.length > this.limit) {
      return value.substring(0, this.limit) + '...';
    }
    return value;
  }
}
