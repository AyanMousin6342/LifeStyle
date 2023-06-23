import { Component, ViewChild, ElementRef } from '@angular/core';
import { UsercategoryService } from '../usercategory.service';
import { Getstoreprocedure } from '../Models/categories.model';
import {Chart} from 'chart.js';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  // @ViewChild('pieChart', { static: false }) pieChartRef!: ElementRef;
  @ViewChild('lineChart', { static: false }) lineChartRef!: ElementRef;
  @ViewChild('barChart', { static: false }) barChartRef!: ElementRef;
  // @ViewChild('maxMinChart', { static: false }) maxMinChartRef!: ElementRef;

  categoryData: Getstoreprocedure[] = [];
  categoryName = '';

  constructor(private categoryService: UsercategoryService) {}

  ngAfterViewInit(): void {
    this.getCategoryData();
    
  }


  getCategoryData(): void {
    this.categoryService.getCategoryData(this.categoryName).subscribe(data => {
      this.categoryData = data;
      this.renderCharts();
    });
  }

  renderCharts(): void {
    if (this.categoryData) {
      // this.renderPieChart();
      this.renderLineChart();
      this.renderBarChart();
    }
  }

  
  // renderPieChart(): void {
  //   if (this.categoryData) {
  //     const labels = this.categoryData.map(item => item.inventory_name);
  //     const data = this.categoryData.map(item => item.quantity);
  
  //     const pieChart = new Chart(this.pieChartRef.nativeElement, {
  //       type: 'pie',
  //       data: {
  //         labels: labels,
  //         datasets: [{
  //           data: data,
  //           backgroundColor: this.generateRandomColors(labels.length),
  //           hoverBackgroundColor: this.generateRandomColors(labels.length)
  //         }]
  //       },
  //       options: {
  //         responsive: true,
  //         maintainAspectRatio: false // Added to prevent full-screen display
  //       }
  //     });
  //   }
  // }
  
  renderLineChart(): void {
    if (this.categoryData) {
      const labels = this.categoryData.map(item => item.month_year);
  
      const inventoryGroups = this.groupByInventoryName(this.categoryData);
  
      const datasets = Object.keys(inventoryGroups).map(inventoryName => {
        const data = inventoryGroups[inventoryName].map((item: any) => item.quantity);
  
        return {
          label: inventoryName,
          data: data,
          borderColor: this.generateRandomColor(),
          fill: false
        };
      });
  
      const lineChart = new Chart(this.lineChartRef.nativeElement, {
        type: 'line',
        data: {
          labels: labels,
          datasets: datasets
        },
        options: {
          responsive: true,
          maintainAspectRatio: false // Added to prevent full-screen display
        }
      });
    }
  }
  
  renderBarChart(): void {
    const labels = this.categoryData.map(item => item.inventory_name);
    const quantityData = this.categoryData.map(item => item.quantity);
    const remainingData = this.categoryData.map(item => item.remaining_quantity);

    const barChart = new Chart(this.barChartRef.nativeElement, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Quantity',
          data: quantityData,
          backgroundColor: this.generateRandomColors(labels.length),
          hoverBackgroundColor: this.generateRandomColors(labels.length)
        }, {
          label: 'Remaining Quantity',
          data: remainingData,
          backgroundColor: this.generateRandomColors(labels.length),
          hoverBackgroundColor: this.generateRandomColors(labels.length)
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Inventory'
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Quantity'
            }
          }
        }
      }
    });
  }

  generateRandomColors(length: number): string[] {
    const colors: string[] = [];
    const letters = '0123456789ABCDEF';

    for (let i = 0; i < length; i++) {
      let color = '#';
      for (let j = 0; j < 6; j++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      colors.push(color);
    }

    return colors;
  }

  generateRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  groupByInventoryName(data: Getstoreprocedure[]): { [name: string]: Getstoreprocedure[] } {
    return data.reduce((groups: any, item: Getstoreprocedure) => {
      const name = item.inventory_name;
      if (!groups[name]) {
        groups[name] = [];
      }
      groups[name].push(item);
      return groups;
    }, {});
  }
}

