import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data = [{
    type: "choroplethmapbox", locations: ["NY", "MA", "VT"], z: [-50, -10, -20],
    geojson: "https://raw.githubusercontent.com/python-visualization/folium/master/examples/data/us-states.json"
  }];
  
   layout = {mapbox: {center: {lon: -74, lat: 43}, zoom: 3.5},
                width: 600, height:400};
  
   config = {mapboxAccessToken: "your access token"};
  
 


}
