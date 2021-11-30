import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";


@Component({
  selector: 'app-dynamic-plots',
  templateUrl: './dynamic-plots.component.html',
  styleUrls: ['./dynamic-plots.component.scss']
})
export class DynamicPlotsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  graph1 = {
    data: [
      { x: [1, 2, 3], y: [2, 3, 4], type: 'bar' },
    ],
    layout: {title: 'Some Data to Hover Over'}
  };

  graph2 = {
    data: [
      { x: [1, 2, 3, 4, 5], y: [1, 4, 9, 4, 1], type: 'scatter' },
      { x: [1, 2, 3, 4, 5], y: [1, 3, 6, 9, 6], type: 'scatter' },
      { x: [1, 2, 3, 4, 5], y: [1, 2, 4, 5, 6], type: 'scatter' },
    ],
    layout: {title: 'Some Data to Highlight'}
  };

  interactivePlotSubject$: Subject<any> = new BehaviorSubject<any>(this.graph2.data);

  hover(event: any): void {
    this.interactivePlotSubject$.next([this.graph2.data[event.points[0].pointIndex]]);
  }

  mouseLeave(event:any): void {
    this.interactivePlotSubject$.next(this.graph2.data);
  }

  

}
