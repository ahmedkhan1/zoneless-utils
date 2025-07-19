import {
    Directive,
    Input,
    TemplateRef,
    ViewContainerRef,
    Signal,
    effect
  } from '@angular/core';
  
  @Directive({
    selector: '[zonelessIf]',
    standalone: true,
  })
  export class ZonelessIfDirective {
    private hasView = false;
  
    constructor(
      private templateRef: TemplateRef<any>,
      private viewContainer: ViewContainerRef
    ) {}
  
    @Input()
    set zonelessIf(condition: boolean | Signal<boolean>) {
      if (typeof condition === 'function') {
        effect(() => {
          this.updateView(condition());
        });
      } else {
        this.updateView(condition);
      }
    }
  
    private updateView(value: boolean) {
      if (value && !this.hasView) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.hasView = true;
      } else if (!value && this.hasView) {
        this.viewContainer.clear();
        this.hasView = false;
      }
    }
  }
  