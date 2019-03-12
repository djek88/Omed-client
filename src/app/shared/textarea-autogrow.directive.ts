import {Directive, ElementRef, HostListener, AfterContentChecked } from '@angular/core';

@Directive({
  selector: '[omedTextareaAutogrow]'
})
export class TextareaAutogrowDirective implements AfterContentChecked {
  @HostListener('input', ['$event.target'])
  onInput(textArea: HTMLTextAreaElement): void {
    this.adjust();
  }

  constructor(public element: ElementRef) { }

  ngAfterContentChecked() {
    this.adjust();
  }

  adjust(): void {
    const nativeElement = this.element.nativeElement;
    nativeElement.style.overflow = 'hidden';
    nativeElement.style.height = 'auto';
    nativeElement.style.height = nativeElement.scrollHeight + 'px';
  }
}
