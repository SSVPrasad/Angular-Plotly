import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule, PlotlyService } from 'angular-plotly.js';
import { PlotlyHTMLElement } from 'plotly.js-dist-min';


@Component({
  selector: 'app-chinnis-graph',
  templateUrl: './chinnis-graph.component.html',
  styleUrls: ['./chinnis-graph.component.scss']
})
export class ChinnisGraphComponent implements OnInit {

 
  
  graph2Id: string = '';
  revisionCount: number = 0;
  toolBarToggle: boolean = true;
  // Bar Chart
  // graph1 = {
  //   data: [{ x: [1, 2, 3], y: [2, 3, 4], type: 'bar' }],
  //   layout: { title: 'Some Data to Hover Over' },
  // };

  // Line chart
  config: Partial<PlotlyJS.Config> = {
    displaylogo: false,
    showLink: true,
    responsive: true,
    showAxisDragHandles: true,
    linkText: 'config.linkText',
    setBackground: () => 'red',
    displayModeBar: this.toolBarToggle,
    modeBarButtonsToAdd: [
      {
        name: 'CustomButton',
        title: 'CustomButton',
        icon: '',
        click: (gd: any) => {
          PlotlyJS.relayout(gd, {});
        },
      },
    ],
  };

  graph2 = {
    data: [
      {
        x: [1, 2, 3, 4, 4.5],
        y: [1, 4, 9, 4, 1],
        //BELOW COMBO, alternate to 'x'
        // x0: 0,//initial value
        // dx: 4,//step size
        //lly, y0 and dy
        type: 'scatter',
        visible: 'false',
        name: 'Data Name 1',
        // showlegend: false,
        legendrank: 1,
        legendgroup: 'group-1',
        legendgrouptitle: {
          font: { color: 'darkblue', family: 'Times New Roman' },
          text: 'Group Title',
          size: 24,
        },
        opacity: 0.5,
        // ids: ['11', '22', '33'],//??
        mode: 'lines+markers+text',
        // Parent: data[type=scatter]
        // Examples: "lines", "markers", "lines+markers", "lines+markers+text", "none"
        //BASED ON THE 'mode' selectin we do customization to marker or line or text as below
        marker: {
          color: 'rgb(0, 0, 0)',
          size: 12,
        },
        line: { shape: 'spline' }, //about the chart - shape, size, color.. dash or dot
        text: 'Data.text',
        textposition: 'bottom center', // "top left" | "top center" | "top right" | "middle left" | "middle center" | "middle right" | "bottom left" | "bottom center" | "bottom right" )
        hovertemplate: '<b>Set Point Line</b><br>Value : 0.7<extra></extra>',
      },
      {
        x: [1, 2, 3, 4, 5],
        y: [1, 3, 6, 9, 6],
        type: 'scatter',
        name: 'Data Name 2',
        visible: 'false',
        legendrank: 3,
        legendgroup: 'group-1',
      },
      {
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 5, 6],
        type: 'scatter',
        visible: 'false',
        name: 'Data Name 3',
        legendrank: 2,
        legendgroup: 'group-2',
      },
      {
        type: 'scatter',
        mode: 'markers+lines',
        // name: '<b>Set Point Line</b><br>Value : 0.7',
        x: [1, 5],
        y: [8, 8],
        // text: ['🔻', '🔻'],
        marker: { size: 12, symbol: 'triangle-up', color: 'blue' },
        line: { color: 'ciyent', width: 4 },
        showlegend: false,
        hovertemplate: '<b>Set Point Line</b><br>Value : 8<extra></extra>',
      },
      {
        type: 'scatter',
        mode: 'markers+lines',
        // name: '<b>Set Point Line</b><br>Value : 0.7',
        x: [1, 5],
        y: [2, 2],
        // text: ['🔻', '🔻'],
        marker: { size: 12, symbol: 'triangle-down', color: 'red' },
        line: { color: 'pink', width: 5 },
        showlegend: false,
        hovertemplate: '<b>Set Point Line</b><br>Value : 2<extra></extra>',
      },
    ],
    layout: {
      title: 'Some Data to Highlight',
      hoverdistance: 20,
      hovermode: 'x unified', //x, y , y unified,
      dragmode: 'drawline',
      shapes: [
        //to draw some shapes on the charts
        {
          // type: 'circle',
          // // x-reference is assigned to the x-values
          // xref: 'paper',
          // // y-reference is assigned to the plot paper [0,1]
          // // yref: 'paper',
          // x0: 1,
          // y0: 4,
          // x1: 1,
          // y1: 4,
          // fillcolor: '#d3d3d3',
          // // opacity: 0.5,
          // line: {
          //   width: 3,
          //   color: 'red',
          // },
          type: 'circle',
          x0: 2,
          x1: 5,
          y0: 1,
          y1: 8,
          fillcolor: 'red',
          opacity: 0.3,
          line: {
            width: 0,
          },
        },
      ],
      height: 'auto',
      width: 'auto',
      autosize: true,
      modebar: {
        color: 'white',
        activecolor: 'yellow',
        add: 'togglehover',
        bgcolor: 'black',
        orientation: 'v',
      },
      annotations: [
        {
          text: 'Important!',
          x: 2,
          y: 4,
          arrowcolor: 'black',
          arrowhead: 24,
          captureevents: true,
          editable: true,
          font: { size: 14 },
          ay: -30,
        },
      ],
      // scene: {
      //   aspectmode: 'manual',
      //   aspectratio: {
      //     x: 1,
      //     y: 1,
      //     z: 1,
      //   },
      //   camera: {
      //     center: {
      //       x: 0,
      //       y: 0,
      //       z: 0,
      //     },
      //     eye: {
      //       x: 1.59999582495,
      //       y: 1.57131061558,
      //       z: 0.970117065684,
      //     },
      //     up: {
      //       x: 0,
      //       y: 0,
      //       z: 1,
      //     },
      //   },
      // },
    },
  };

  hoverLayout = {
    title: 'HOVER LAYOUT',
    // hoverdistance: 20 ,
    dragmode: 'zoom',
    shapes: [
      //to draw some shapes on the charts
      {
        // type: 'circle',
        // // x-reference is assigned to the x-values
        // xref: 'paper',
        // // y-reference is assigned to the plot paper [0,1]
        // // yref: 'paper',
        // x0: 1,
        // y0: 4,
        // x1: 1,
        // y1: 4,
        // fillcolor: '#d3d3d3',
        // // opacity: 0.5,
        // line: {
        //   width: 3,
        //   color: 'red',
        // },
        type: 'circle',
        x0: 2,
        x1: 5,
        y0: 1,
        y1: 8,
        fillcolor: 'red',
        opacity: 0.3,
        line: {
          width: 0,
        },
      },
    ],
    height: 'auto',
    width: 'auto',
    modebar: {
      color: 'white',
      activecolor: 'yellow',
      add: 'togglehover',
      bgcolor: 'black',
      orientation: 'v',
    },

    // scene: {
    //   aspectmode: 'manual',
    //   aspectratio: {
    //     x: 1,
    //     y: 1,
    //     z: 1,
    //   },
    //   camera: {
    //     center: {
    //       x: 0,
    //       y: 0,
    //       z: 0,
    //     },
    //     eye: {
    //       x: 1.59999582495,
    //       y: 1.57131061558,
    //       z: 0.970117065684,
    //     },
    //     up: {
    //       x: 0,
    //       y: 0,
    //       z: 1,
    //     },
    //   },
    // },
  };

  interactivePlotSubject$: Subject<any> = new BehaviorSubject<any>(
    this.graph2.data
  );

  hover(event: any): void {
    console.log('HOVER()');
    // PlotlyModule.plotlyjs.restyle(
    //   this.plotlyService.getInstanceByDivId('graph2Id'),
    //   { 'marker.size': 28 },
    //   0
    // );

    // this.interactivePlotSubject$.next([
    //   this.graph2.data[event.points[0].pointIndex],
    // ]);
    console.log('revision count: ', this.revisionCount);
    // var graph2Id = ;
  }

  mouseLeave(event: any): void {
    console.log('mL()');
    // this.interactivePlotSubject$.next(this.graph2.data);
    // PlotlyModule.plotlyjs.relayout(
    //   this.plotlyService.getInstanceByDivId('graph2Id'),
    //   { 'marker.size': 12 },
    //   0
    // );
  }

  onClick(event: any): void {
    console.log('onClick()');
    // alert('clicked!!');
    // this.interactivePlotSubject$.next(this.graph2.data);
  }

  onClickAnnotation(event: any) {
    console.log('onClickAnnotation');
  }

  afterChartInit(): void {
    console.log('AfterChartInit() ');
  }

  zoomClick() {
    console.log('zoomsC()');
    PlotlyModule.plotlyjs.relayout(
      this.plotlyService.getInstanceByDivId('graph2Id'),
      { dragmode: 'zoom' },
      0
    );
  }

  updatedTheGraph() {
    console.log('updatedTG()');
  }

  toggleToolbar() {
    this.toolBarToggle = !this.toolBarToggle;
    PlotlyModule.plotlyjs.relayout(
      this.plotlyService.getInstanceByDivId('graph2Id'),
      { dragmode: 'zoom' },
      0
    );
    // console.log()
  }

  constructor(public plotlyService: PlotlyService) {}


  ngOnInit(): void {
  }

}
