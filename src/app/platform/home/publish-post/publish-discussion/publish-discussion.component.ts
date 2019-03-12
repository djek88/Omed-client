import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PublishPostService } from '../shared/publish-post.service';

import { AdditionalApi } from '../../../../shared/sdk';

@Component({
  selector: 'omed-publish-discussion',
  templateUrl: './publish-discussion.component.html',
  styleUrls: ['./publish-discussion.component.css']
})
export class PublishDiscussionComponent implements OnInit {
  discussionForm: FormGroup;
  formDisabled = true;

  private postImageConfigurations: any;

  constructor(
    private additionalApi: AdditionalApi,
    private fb: FormBuilder,
    private publishPostService: PublishPostService
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.additionalApi.postImageConfigurations().subscribe((results) => {
      this.postImageConfigurations = results;
      this.formDisabled = false;
    });
  }

  onSubmit() {
    if (this.discussionForm.invalid || this.formDisabled) {
      return;
    }

    this.formDisabled = true;

    const formModel = this.discussionForm.value;

    this.publishPostService.publishDiscussion(
      formModel.text,
      formModel.incognito,
      formModel.images
    ).subscribe((result) => {
        this.formDisabled = false;

        this.discussionForm.reset();
      });
  }

  onFilesChange(event) {
    const files = event.target.files;

    if (files && files.length > 0) {
      Object.keys(files).forEach((key) => {
        if (this.discussionForm.controls.images.value.length === 10) {
          return;
        }

        const file = files[key];
        if (this.validateFile(file)) {
          this.discussionForm.controls.images.value.push(file);
        }
      });
    }
  }

  private createForm() {
    this.discussionForm = this.fb.group({
      text: ['', Validators.required],
      incognito: false,
      images: [[]]
    });
  }

  private validateFile(file: any) {
    const maxFileSize = this.postImageConfigurations.maxSize;
    if (file.size < maxFileSize) {
      return false;
    }

    const supportedTypes = [];
    for (const key in this.postImageConfigurations.supportedTypes) {
      if (this.postImageConfigurations.supportedTypes.hasOwnProperty(key)) {
        supportedTypes.push(this.postImageConfigurations.supportedTypes[key]);
      }
    }

    if (supportedTypes.indexOf(file.type) === -1) {
      return false;
    }

    return true;
  }
}
