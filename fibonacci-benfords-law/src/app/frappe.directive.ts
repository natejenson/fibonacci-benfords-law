import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import Chart from "frappe-charts/dist/frappe-charts.min.esm"
import { HostListener } from '@angular/core/src/metadata/directives';


@Directive({
  selector: '[appFrappe]'
})
export class FrappeDirective {

  @Input() title: string;
  @Input() data: any;
  @Input() type: string;
  @Input() height: number;

  @Output() frappe: EventEmitter<any> = new EventEmitter();

  constructor(
    private el: ElementRef
  ) {
    this.type = this.type || 'bar';
    this.height = this.height || 250;
  }

  ngOnChanges() {
    console.log('ng on changes');
    let chart = new Chart({
      parent: this.el.nativeElement,
      title: this.title,
      region_fill: 1,
      data: this.data,
      type: this.type,
      height: this.height
    });
    this.frappe.emit(chart);
  }

}