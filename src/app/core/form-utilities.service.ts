import { Injectable } from '@angular/core';

@Injectable()
export class FormUtilitiesService {
  constructor() { }

  showTips(controls) {
    for (let control in controls) {
      if (controls.hasOwnProperty(control)) {
        controls[control].markAsDirty();
        controls[control].markAsTouched();
      } 
    }
  }

  readFileAsDataUrl(file, cb) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => cb(fileReader.result);
  }

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

    let correctedDay;
    if (date.getDate() < 9) {
      correctedDay = `0${date.getDate()}`;
    } else {
      correctedDay = date.getDate();
    }


    return `${date.getFullYear()}-${correctedMonth}-${correctedDay}`;
  }
}
