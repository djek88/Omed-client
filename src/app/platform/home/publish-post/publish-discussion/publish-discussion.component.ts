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
    $('textarea').on('keyup', function(){
        $(this).val($(this).val().replace(/\n\s*\n/g, '\n'));
        $(this).val($(this).val().replace(/  +/g, ' '));
    });

    $(".check").on('click', function() {
        $(this).toggleClass('true');
    });
  }

}
