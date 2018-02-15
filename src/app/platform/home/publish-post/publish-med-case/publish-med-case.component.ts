import { Component, OnInit } from '@angular/core';

declare var $: any, jQuery: any;

@Component({
  selector: 'omed-publish-med-case',
  templateUrl: './publish-med-case.component.html',
  styleUrls: ['./publish-med-case.component.css']
})
export class PublishMedCaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("label.rd").on('click', function() { // rd stands for Radio button
        var parent = $(this).closest('div');
        $("label.rd", parent).addClass('dd'); // dd means disabled
        $(this).removeClass('dd');
        $(this).addClass('sd');
    });

    $(".tagfy").chosen({
      disable_search_threshold: 5,
      no_results_text: "Aucun résultat trouvé!",
      inherit_select_classes: true,
      max_selected_options: 5,
      single_backstroke_delete: false,
      display_selected_options: false,
      width: "100%"
    });

    $(document).ready(function() { // show more fields in adding a question related to a medical case post
        /*var x = 3;
        $('.ans span:lt(' + x + ')').show();*/

        var last = $('.ans span > input');
        $(last).focus(function() {
            $(this).parent().next().show();
        });
    });

    $('#pt2 .add').on('click', function() {
        var quest = $(this).attr('link');
        $(this).hide();
        $(quest).show();
    });
    $('#q1 > .close').on('click', function() {
        // var quest = $(this).attr('link'); or this.closest
        $('#q1 :input').val('');
        $('#q1').hide();
        $("[link='#q1']").show();
    });
    $('#q2 > .close').on('click', function() {
        $('#q2 :input').val('');
        $('#q2').hide();
        $("[link='#q2']").show();
    });

    $(".cbs, .check").on('click', function() {
        $(this).toggleClass('true');
    });

    $(".rd").on('click', function() { // radio button
        var parent = $(this).closest('.rcont'); // radio cont
        $(".rd", parent).removeClass('true');
        $(this).addClass('true');
    });
  }

}
