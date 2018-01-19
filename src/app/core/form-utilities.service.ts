import { Injectable } from '@angular/core';

@Injectable()
export class FormUtilitiesService {
  constructor() { }

  dateToString(yearOffset?: number, monthOffset?: number, dayOffset?: number): string {
    yearOffset = yearOffset || 0;
    monthOffset = monthOffset || 0;
    dayOffset = dayOffset || 0;

    const date = new Date();
    date.setFullYear(date.getFullYear() + yearOffset);
    date.setMonth(date.getMonth() + monthOffset);
    date.setDate(date.getDate() + dayOffset);

    let correctedMonth;
    if (date.getMonth() < 9) {
      correctedMonth = `0${date.getMonth() + 1}`;
    } else {
      correctedMonth = date.getMonth() + 1;
    }

    return `${date.getFullYear()}-${correctedMonth}-${date.getDate()}`;
  }
}
