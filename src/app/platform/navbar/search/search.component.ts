import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'omed-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }
  // what if need to disable event listeners?! In case when componente recreates many times...
  ngOnInit() {
    $('#search').on('focus', event => {
        if (!$('#search').hasClass('on')) {
            $('#search').addClass('on');
        }
    });

    $('#search').keyup(e => {
        $('#results').slideDown('normal');
        e.stopPropagation();
    });

    // make variable between those two, and not run the next one unless the results is already shown
    $(document.body).click(() => {
        $('#results').hide();
        if ($('#search').hasClass('on')) {
            $('#search').removeClass('on');
        }
    });

    /*$('#search').on("blur", function(event) {
        if($('#search').hasClass('on')){
            $('#search').removeClass('on');
        }
    });*/

    $('form.navbar').click(e => {
        e.stopPropagation();
    });
  }

}
