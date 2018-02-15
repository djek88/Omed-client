import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'omed-navbar-search',
  templateUrl: './navbar-search.component.html',
  styleUrls: ['./navbar-search.component.css']
})
export class NavbarSearchComponent implements OnInit {

  constructor() { }
  // what if need to disable event listeners?! In case when componente recreates many times...
  ngOnInit() {
    $('#search').on("focus", function(event) {
        if(!$('#search').hasClass('on')){
            $('#search').addClass('on');
        }
    });

    $('#search').keyup(function(e){
        $('#results').slideDown('normal');
        e.stopPropagation();
    });

    // make variable between those two, and not run the next one unless the results is already shown
    $(document.body).click(function() {
        $('#results').hide();
        if($('#search').hasClass('on')){
            $('#search').removeClass('on');
        }
    });

    /*$('#search').on("blur", function(event) {
        if($('#search').hasClass('on')){
            $('#search').removeClass('on');
        }
    });*/

    $('form.navbar').click(function(e) {
        e.stopPropagation();
    });
  }

}
