import { Component, OnInit }                                   from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { PublishPostService } from '../shared/publish-post.service';

import { Post, Discussion } from '../../../../shared/sdk';

declare var $: any, jQuery: any;

@Component({
  selector: 'omed-publish-discussion',
  templateUrl: './publish-discussion.component.html',
  styleUrls: ['./publish-discussion.component.css']
})
export class PublishDiscussionComponent implements OnInit {
  discussionForm: FormGroup;

  formSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private publishPostService: PublishPostService
  ) {
    this.createForm();
  }

  ngOnInit() { }

  onSubmit() {
    if (this.discussionForm.invalid) return;

    this.formSubmitted = true;

    const formModel = this.discussionForm.value;

    this.publishPostService.publishDiscussion(formModel.text, formModel.incognito)
      .subscribe((result) => {
        this.formSubmitted = false;

        console.log(result);
      });
  }

  private createForm() {
    this.discussionForm = this.fb.group({
      text: ['', Validators.required],
      incognito: false
    });
  }
}
