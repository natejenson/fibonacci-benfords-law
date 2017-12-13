import { Component, OnInit } from '@angular/core';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {occurrences} from '../../data';

@Component({
  selector: 'app-visualize',
  templateUrl: './visualize.component.html',
  styleUrls: ['./visualize.component.css']
})
export class VisualizeComponent implements OnInit {

  occurrences: any[];
  newest: number;

  view: any[] = [1000, 400];

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
    domain: ['#8e44ad']
  };

  constructor() {
    Object.assign(this, {occurrences});   
  }
  
  lastTwo = [0,1];

  ngOnInit() {
    window.setInterval(() => {
        this.addData(this.nextFibonacci());
    }, 700);
  }

  addData(num) {
    this.newest = num;
    // get the most significant digit and increment the data
    let leading = parseInt(num.toString()[0]);
    var clone = this.occurrences.slice(0);
    clone[leading-1].value++;
    this.occurrences = clone;
  }


  nextFibonacci() {
    const res = this.lastTwo[0] + this.lastTwo[1];
    this.lastTwo.shift();
    this.lastTwo.push(res);
    return res;
  }
}
