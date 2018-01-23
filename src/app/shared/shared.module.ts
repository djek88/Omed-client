import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule }                   from 'angular2-text-mask';
import { NgbModule }                        from '@ng-bootstrap/ng-bootstrap';
//import { FileUploadModule }                 from 'ng2-file-upload';

import { CapitalizeFirstPipe } from './capitalize-first.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CapitalizeFirstPipe
  ],
  exports: [
    CapitalizeFirstPipe,

    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    NgbModule,
    //FileUploadModule
  ]
})
export class SharedModule { }
