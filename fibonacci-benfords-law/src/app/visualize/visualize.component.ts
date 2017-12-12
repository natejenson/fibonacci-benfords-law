import { Component, OnInit } from '@angular/core';
import Chart from "frappe-charts/dist/frappe-charts.min.esm"

@Component({
  selector: 'app-visualize',
  templateUrl: './visualize.component.html',
  styleUrls: ['./visualize.component.css']
})
export class VisualizeComponent implements OnInit {

  data = {
    labels: ["12am-3am", "3am-6pm", "6am-9am", "9am-12am",
        "12pm-3pm", "3pm-6pm", "6pm-9pm", "9am-12am"
    ],
    datasets: [
        {
            title: "Some Data",
            values: [25, 40, 30, 35, 8, 52, 17, -4]
        },
        {
            title: "Another Set",
            values: [25, 50, -10, 15, 18, 32, 27, 14]
        }
    ]
  }
  constructor() { }

  ngOnInit() {
  
  }

}
