import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'omed-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  ngOnInit() {
    $('.st').stick_in_parent({
      parent: 'body',
      offset_top: 60
    });
  }
}
