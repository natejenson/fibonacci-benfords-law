import { Component, OnInit } from '@angular/core';
import Chart from "frappe-charts/dist/frappe-charts.min.esm"
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {single} from '../../data';

@Component({
  selector: 'app-visualize',
  templateUrl: './visualize.component.html',
  styleUrls: ['./visualize.component.css']
})
export class VisualizeComponent implements OnInit {

  single: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Most significant digit';
  showYAxisLabel = true;
  yAxisLabel = 'Occurrences';

  colorScheme = {
    domain: ['#5AA454']
  };

  constructor() {
    Object.assign(this, {single});   
  }
  
  lastTwo = [0,1];

  ngOnInit() {
    window.setInterval(() => {
        this.addData(this.nextFibonacci());
    }, 1000);
  }

  addData(num) {
    // get the most significant digit and increment the data
    let leading = parseInt(num.toString()[0]);
    var clone = this.single.slice(0);
    clone[leading-1].value++;
    this.single = clone;
  }


  nextFibonacci() {
    const res = this.lastTwo[0] + this.lastTwo[1];
    this.lastTwo.shift();
    this.lastTwo.push(res);
    return res;
  }
}
