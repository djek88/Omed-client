import { Component, OnInit } from '@angular/core';

declare var $ :any;

@Component({
  selector: 'omed-home-notification',
  templateUrl: './home-notification.component.html',
  styleUrls: ['./home-notification.component.css']
})
export class HomeNotificationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.delc').on('click', function() { // delete alert confirmation
        $(this).siblings('.conf').show();
    });
    $('.ccl').on('click', function() {
        $(this).parents('.conf').hide();
    });
    $('.cnf').on('click', function() {
        $(this).parents('.alt').remove();
        // HERE SEND FEEDBACK TO PLATFORM INFORMING THAT THE USER HAS SEEN AND CLOSED THE ALERT
    });
    $('.qdel').on('click', function() { // delete alert
        $(this).parent().remove();
        // HERE SEND FEEDBACK TO PLATFORM INFORMING THAT THE USER HAS SEEN AND CLOSED THE ALERT
    });
  }

}
