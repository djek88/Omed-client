import { Directive, HostListener, ElementRef, OnInit, OnDestroy } from "@angular/core";

import { Subject }       from 'rxjs/Subject';
import { ISubscription } from "rxjs/Subscription";

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { PostDescriptionPipe } from "./post-description.pipe";

@Directive({
  selector: '[omedValidatePostDescription]',
  providers: [PostDescriptionPipe]
})
export class ValidatePostDescriptionDirective implements OnInit, OnDestroy {
  postDescription: Subject<string>;
  private el: HTMLInputElement;
  private subscription: ISubscription;

  constructor(
    private elementRef: ElementRef,
    private postDescriptionPipe: PostDescriptionPipe
  ) {
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit() {
    this.postDescription = new Subject<string>();
    this.subscription = this.postDescription
      //.debounceTime(400)
      //.distinctUntilChanged()
      .subscribe(value => {
        this.el.value = this.postDescriptionPipe.transform(value);
      });

    this.postDescription.next(this.el.value);
  }

  @HostListener("keyup", ["$event.target.value"])
  onKeyup(value) {
    this.postDescription.next(value);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
