import { Component, OnInit, AfterViewInit} from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'app-time-series-d3',
  templateUrl: './time-series-d3.component.html',
  styleUrls: ['./time-series-d3.component.scss']
})
export class TimeSeriesD3Component implements OnInit {

  constructor() { }
data:any=[];
layout:any={};

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv") 
    .then((rows)=>{
    
      function unpack(rows:any, key:any) {
             return rows.map(function(row:any) {
       console.log(row[key]);
       return row[key]; 
        });
    
    }

    var trace1 = {
      type: "scatter",
      mode: "lines",
      name: 'AAPL High',
      x: unpack(rows, 'Date'),
      y: unpack(rows, 'AAPL.High'),
      line: {color: '#17BECF'}
    }
    
    var trace2 = {
      type: "scatter",
      mode: "lines",
      name: 'AAPL Low',
      x: unpack(rows, 'Date'),
      y: unpack(rows, 'AAPL.Low'),
      line: {color: '#7F7F7F'}
    }
    
    this.data = [trace1,trace2];
    
    
    this.layout = {
      title: 'Time Series with Rangeslider',
      xaxis: {
        autorange: true,
        range: ['2015-02-17', '2017-02-16'],
        rangeselector: {buttons: [
            {
              count: 1,
              label: '1m',
              step: 'month',
              stepmode: 'backward'
            },
            {
              count: 6,
              label: '6m',
              step: 'month',
              stepmode: 'backward'
            },
            {step: 'all'}
          ]},
        rangeslider: {range: ['2015-02-17', '2017-02-16']},
        type: 'date'
      },
      yaxis: {
        autorange: true,
        range: [86.8700008333, 138.870004167],
        type: 'linear'
      }
    };
    
    // Plotly.newPlot(this.myDiv.nativeElement, data, layout);  
    })
  
  }


}
