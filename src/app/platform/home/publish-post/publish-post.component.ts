import { Component, OnInit } from '@angular/core';

declare var $: any, jQuery: any;

@Component({
  selector: 'omed-publish-post',
  templateUrl: './publish-post.component.html',
  styleUrls: ['./publish-post.component.css']
})
export class PublishPostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.bpx > li').on('click', function() {
        $('.bpx > li').removeClass('active');
        $(this).addClass('active')
        $('.tabsc').hide();
        var activeTab = $(this).attr('link');
        $(activeTab).show();
        return false;
    });

    /*$("label.cb").on('click', function() { // cb stands for Checkbox
        var parent = $(this).closest('div');
        $('label.cb', parent).removeClass('ed'); // ed means enabled
        $('label.cb', parent).addClass('dd');
        $(this).removeClass('dd');
        $(this).addClass('ed');
    });*/
  }

}
