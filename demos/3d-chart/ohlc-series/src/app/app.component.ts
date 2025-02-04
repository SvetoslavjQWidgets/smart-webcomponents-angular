﻿import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ThreeDChartComponent } from '@smart-webcomponents-angular/threedchart';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild('chart', { read: ThreeDChartComponent, static: false }) chart!: ThreeDChartComponent;

  generateData() {
    let sampleData = [];
    let startingDate = new Date('2020-05-21');
    for(let i=0; i<50; i++){
      startingDate.setDate(startingDate.getDate() + 1);
      let fomrattedDate =  startingDate.getDate()+'/'+(startingDate.getMonth()+1);
      let high = Math.floor(Math.random() * 100) + 500;
      do{
        var low = Math.floor(Math.random() * 100) + 400
      }while(low >= high);
      do{
        var openPrice = Math.floor(Math.random() * 100) + 400;
      }while(openPrice > high || openPrice < low);
      do{
        var closePrice = Math.floor(Math.random() * 100) + 400;
      }while(closePrice > high || closePrice < low);

      sampleData.push({
        Date: fomrattedDate,
        SPClose: closePrice,
        SPOpen: openPrice,
        SPHigh: high,
        SPLow: low,
        DOW: Math.floor(Math.random() * 200) + 100,
      })
    }
    return sampleData;
  }

  dataSource = this.generateData();

  caption = 'Stock Prices Changes';

  description = '';

  showLegend = false;

  colorScheme = 'scheme29';

  cameraPosition = {
    x: 0,
    y: 10,
    z: 55,
  };

  xAxis = {
    dataField: 'Date',
  };

  valueAxis = {
    unitInterval: 100,
    minValue: 0,
    maxValue: 700,
    formatSettings: {
      prefix: '$',
    },
  };

  gridOptions = {
    width: 80,
  };

  seriesGroups = [
    {
      type: 'column',
      series: [
        {
          dataField: 'DOW',
          displayText: 'DOW Jones',
        }
      ],
      colorFunction: function (value:any) {
        return (value < 200) ? '#E25848' : '#61D14F';
      }
    },
    {
      type: 'ohlc',

      series: [
        {
          dataFieldClose: 'SPClose',
          displayTextClose: 'Close price',
          dataFieldOpen: 'SPOpen',
          displayTextOpen: 'Open price',
          dataFieldHigh: 'SPHigh',
          displayTextHigh: 'High price',
          dataFieldLow: 'SPLow',
          displayTextLow: 'Low price',
          displayText: 'S&P 500',
      }
      ],
      colorFunction: function (value:any) {
        return (value.close > value.open) ? '#E25848' : '#61D14F';
      }
    }
  ];

  ngOnInit(): void {
    // onInit code.
  }

  ngAfterViewInit(): void {
    // afterViewInit code.
    this.init();
  }

  init(): void {
    // init code.
  }
}