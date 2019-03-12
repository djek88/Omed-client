import { Component, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'omed-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegistrationComponent {
  showNavbar = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) { route = route.firstChild; }
        return route;
      }),
    ).subscribe((deepestChild) => {
      this.showNavbar = !deepestChild.snapshot.url.length;
    });
  }
}
