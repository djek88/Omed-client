import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'omed-publish-listing',
  templateUrl: './publish-listing.component.html',
  styleUrls: ['./publish-listing.component.css']
})
export class PublishListingComponent implements OnInit {
  ngOnInit() {
    // at this moment already initialized in publish-med-case component
    /*$(".tagfy").chosen({
      disable_search_threshold: 5,
      no_results_text: "Aucun résultat trouvé!",
      inherit_select_classes: true,
      max_selected_options: 5,
      single_backstroke_delete: false,
      display_selected_options: false,
      width: "100%"
    });*/
  }
}
