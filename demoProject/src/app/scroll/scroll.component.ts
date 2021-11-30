import { Component, OnInit, AfterViewInit } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent implements OnInit {

  constructor() { }
  data:any=[];
  layout:any={};

  ngOnInit(): void {
  }
  ngAfterViewInit(){
   
          d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/2015_06_30_precipitation.csv") 
          .then((rows)=>{
          
            function unpack(rows:any, key:any) {
                   return rows.map(function(row:any) {
             console.log(row[key]);
             return row[key]; 
              });
        }
    
         this.data = [
          {
            type: "scattermapbox",
            text: unpack(rows, "Globvalue"),
            lon: unpack(rows, "Lon"),
            lat: unpack(rows, "Lat"),
            marker: { color: "fuchsia", size: 4 }
          }
        ];
    
        this.layout = {
          dragmode: "zoom",
          mapbox: { style: "open-street-map", center: { lat: 38, lon: -90 }, zoom: 3 },
          margin: { r: 0, t: 0, b: 0, l: 0 }
        };
    
        
      }
    );
    

  }


}
