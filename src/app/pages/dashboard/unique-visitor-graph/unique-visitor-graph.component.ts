import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-unique-visitor-graph',
  templateUrl: './unique-visitor-graph.component.html',
  standalone: true,
  imports: [SelectModule, FormsModule, ChartModule]
})
export class UniqueVisitorGraphComponent {
  years = [
    { name: '2025', value: '2025' },
    { name: '2024', value: '2024' }
  ];
  selectedYear = this.years[0]; // default to 2025

  chartData: any;
  chartOptions: any;

  // Year-based dummy datasets
  chartDataByYear: Record<string, any> = {
    '2025': {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [
        {
          type: 'line',
          label: 'Planned Growth',
          borderColor: '#f87171',
          backgroundColor: '#f87171',
          fill: false,
          tension: 0.4,
          borderWidth: 2,
          data: [30, 40, 60, 70, 80]
        },
        {
          type: 'bar',
          label: 'Actual Growth',
          backgroundColor: '#34d399',
          data: [25, 35, 55, 65, 78],
          borderRadius: 5
        }
      ]
    },
    '2024': {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      type: 'line',
      label: 'Planned Growth',
      borderColor: '#f87171',
      backgroundColor: '#f87171',
      fill: false,
      tension: 0.4,
      borderWidth: 2,
      data: [20, 30, 45, 55, 65, 75, 80, 85, 90, 95, 100, 105]
    },
    {
      type: 'bar',
      label: 'Actual Growth',
      backgroundColor: '#34d399',
      data: [18, 28, 40, 50, 60, 72, 78, 83, 88, 92, 98, 102],
      borderRadius: 5
    }
  ]
}
  };

  constructor() {
    this.setChartData(this.selectedYear.value);

    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: '#FFF'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#fff'
          },
          grid: {
            color: '#e5e7eb'
          }
        },
        y: {
          ticks: {
            color: '#fff'
          },
          grid: {
            color: '#e5e7eb'
          }
        }
      }
    };
  }

  // Change chartData when year changes
  setChartData(year: string) {
    this.chartData = this.chartDataByYear[year];
  }
}
