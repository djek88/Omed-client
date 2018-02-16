import { Component, OnInit } from '@angular/core';

declare var $ :any;

@Component({
  selector: 'omed-friend-requests',
  templateUrl: './friend-requests.component.html',
  styleUrls: ['./friend-requests.component.css']
})
export class FriendRequestsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#myDropdown').on('show.bs.dropdown', () => {

    });
  }
}
