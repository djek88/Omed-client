import { Component, OnInit } from '@angular/core';

declare var $ :any;

@Component({
  selector: 'omed-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.st').stk({
        parent: '#omed',
        offset_top: 60
    });
  }

}
