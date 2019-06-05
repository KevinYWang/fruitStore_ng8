import { Directive, ViewContainerRef, TemplateRef, Input, Attribute, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appCounterOf]'
})
export class CounterDirective {

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<object>
  ) { }

  @Input("appCounterOf")
  counter: number;

  ngOnChanges(changes: SimpleChanges) {
    this.container.clear();
    for (let i = 0; i < this.counter; i++) {
      this.container.createEmbeddedView(this.template,
        new CounterDirectiveConetxt(i + 1));
    };
  }
}

class CounterDirectiveConetxt {
  constructor(public $implicit: any) { }
}
