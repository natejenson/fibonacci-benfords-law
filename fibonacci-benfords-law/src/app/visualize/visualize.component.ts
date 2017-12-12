import { Component, OnInit } from '@angular/core';
import Chart from "frappe-charts/dist/frappe-charts.min.esm"

@Component({
  selector: 'app-visualize',
  templateUrl: './visualize.component.html',
  styleUrls: ['./visualize.component.css']
})
export class VisualizeComponent implements OnInit {

  data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    datasets: [
        {
            title: "Fibonacci Leading Digit",
            values: [9,8,7,6,5,4,3,2,1],
        },
    ],
  }
  constructor() { }

  ngOnInit() {
  
  }

}
