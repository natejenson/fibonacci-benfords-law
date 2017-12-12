import { Component, OnInit } from '@angular/core';
import Chart from "frappe-charts/dist/frappe-charts.min.esm"

@Component({
  selector: 'app-visualize',
  templateUrl: './visualize.component.html',
  styleUrls: ['./visualize.component.css']
})
export class VisualizeComponent implements OnInit {

  data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    datasets: [
        {
            title: 'Fibonacci Leading Digit',
            //values: [9,8,7,6,5,4,3,2,1],
            values: [0,0,0,0,0,0,0,0,0],
        },
    ],
  }
  constructor() { }

  lastTwo = [0,1];

  ngOnInit() {
    window.setInterval(() => {
        this.addData(this.nextFibonacci());
    }, 1000);
  }

  addData(num) {
    // get the most significant digit and increment the data
    let leading = parseInt(num.toString()[0]);
    console.log('leading', leading);
    this.data.datasets[0].values[leading-1]++;
  }

  nextFibonacci() {
    const res = this.lastTwo[0] + this.lastTwo[1];
    this.lastTwo.shift();
    this.lastTwo.push(res);
    console.log('fib', res);
    return res;
  }
}
