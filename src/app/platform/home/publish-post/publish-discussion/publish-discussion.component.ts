import { Component, OnInit } from '@angular/core';

declare var $: any, jQuery: any;

@Component({
  selector: 'omed-publish-discussion',
  templateUrl: './publish-discussion.component.html',
  styleUrls: ['./publish-discussion.component.css']
})
export class PublishDiscussionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".check").on('click', function() {
        $(this).toggleClass('true');
    });
  }

}
