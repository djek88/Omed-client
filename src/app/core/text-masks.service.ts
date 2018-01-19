import { Injectable } from '@angular/core';

@Injectable()
export class TextMasksService {
  phoneMask: [string | RegExp] = [/[0-0]/, /[6-7]/, ' ', /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/];

  constructor() { }

  get phoneMaskRegExp(): RegExp {
    return this.maskToRegExp(this.phoneMask);
  }

  maskToRegExp(regArr: [string | RegExp]): RegExp {
    const regExpStrings = regArr.map(item => item instanceof RegExp ? item.source : item);
    return new RegExp(regExpStrings.join(''));
  }

  unmask(value: string): string {
    return value.replace(/\D+/g, '');
  }
}
