import { Directive, HostListener, ElementRef, OnInit, OnDestroy } from '@angular/core';

import { Subject, Subscription } from 'rxjs';

import { PostDescriptionPipe } from './post-description.pipe';

@Directive({
  selector: '[omedValidatePostDescription]',
  providers: [PostDescriptionPipe]
})
export class ValidatePostDescriptionDirective implements OnInit, OnDestroy {
  postDescription: Subject<string>;
  private el: HTMLInputElement;
  private subscription: Subscription;

  constructor(
    private elementRef: ElementRef,
    private postDescriptionPipe: PostDescriptionPipe
  ) {
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit() {
    this.postDescription = new Subject<string>();
    this.subscription = this.postDescription
      // .debounceTime(400)
      // .distinctUntilChanged()
      .subscribe(value => {
        this.el.value = this.postDescriptionPipe.transform(value);
      });

    this.postDescription.next(this.el.value);
  }

  @HostListener('keyup', ['$event.target.value'])
  onKeyup(value) {
    this.postDescription.next(value);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
