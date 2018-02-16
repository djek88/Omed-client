import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postDescription'
})
export class PostDescriptionPipe implements PipeTransform {

  constructor() { }

  transform(value: string): string {
    return value.replace(/\n\s*\n/g, '\n').replace(/  +/g, ' ');
  }
}
