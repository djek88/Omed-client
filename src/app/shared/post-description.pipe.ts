import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postDescription'
})
export class PostDescriptionPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/\n\s*\n/g, '\n').replace(/  +/g, ' ');
  }
}
