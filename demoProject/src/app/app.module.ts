import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlotlyModule } from 'angular-plotly.js';
import * as PlotlyJS from 'plotly.js-dist-min';
import * as d3 from 'd3';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { DynamicPlotsComponent } from './dynamic-plots/dynamic-plots.component';
import { TimeSeriesD3Component } from './time-series-d3/time-series-d3.component';
import { ChinnisGraphComponent } from './chinnis-graph/chinnis-graph.component';
import { MapComponent } from './map/map.component';
import { ScrollComponent } from './scroll/scroll.component';


PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    DynamicPlotsComponent,
    TimeSeriesD3Component,
    ChinnisGraphComponent,
    MapComponent,
    ScrollComponent,
    
    
  ],
  imports: [
    BrowserModule,
    PlotlyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
