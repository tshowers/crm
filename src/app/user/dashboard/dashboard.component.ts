import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ctx1: any;
  ctx2: any;


  constructor(private _router:Router) { 

  }

  ngOnInit(): void {
    this.onTypeChart();
    this.onNewContactsChart();
  }

  onMore(): void {
    this._router.navigate(['contacts']);
  }

  onNewContactsChart(): void {
    this.ctx2 = document.getElementById("contactsAddedChart");
    if (this.ctx2) {
      let chart = new Chart(this.ctx2, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [{
            label: 'Per Month',
            fill: true,
            borderColor: '#10b1dd',
            backgroundColor: 'rgba(227, 168, 178, 0.3)',
            borderDash: [5, 5],
            data: [
              5,
              9,
              11,
              17,
              23,
              18,
              11,
              31,
              33,
              49,
              30,
              41,
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
        }
      });
    }
  }

  onTypeChart(): void {
    this.ctx1 = document.getElementById("profileTypeChart");
    if (this.ctx1) {
      let chart = new Chart(this.ctx1, {
        type: 'pie',
        data: {
          labels: ["Student", "Professional", "Retired", "Unemployed", "Part time"],
          datasets: [{
            data: [28,
            8,
            9,
            17,
            26,
            ],
            backgroundColor: [
              'rgba(209, 196, 227, 0.6)',
              'rgba(16, 177, 221, 0.6)',
              'rgba(224, 180, 185, 0.6)',
              'rgba(44, 153, 224, 0.6)',
              'rgba(227, 168, 178, 0.6)',
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
        }
      });
    }

  }

}
