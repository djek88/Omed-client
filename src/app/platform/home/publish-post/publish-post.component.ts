import { Component, OnInit } from '@angular/core';

declare var $: any, jQuery: any;

@Component({
  selector: 'omed-publish-post',
  templateUrl: './publish-post.component.html',
  styleUrls: ['./publish-post.component.css']
})
export class PublishPostComponent implements OnInit {
  postType: number = 1;

  constructor() { }

  ngOnInit() {
    // have been commented in the initial stage
    /*$("label.cb").on('click', function() { // cb stands for Checkbox
        var parent = $(this).closest('div');
        $('label.cb', parent).removeClass('ed'); // ed means enabled
        $('label.cb', parent).addClass('dd');
        $(this).removeClass('dd');
        $(this).addClass('ed');
    });*/
  }

}