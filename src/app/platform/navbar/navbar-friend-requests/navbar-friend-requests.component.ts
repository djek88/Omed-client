import { Component, OnInit } from '@angular/core';

declare var $ :any;

@Component({
  selector: 'omed-navbar-friend-requests',
  templateUrl: './navbar-friend-requests.component.html',
  styleUrls: ['./navbar-friend-requests.component.css']
})
export class NavbarFriendRequestsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#myDropdown').on('show.bs.dropdown', () => {

    });
  }
}
