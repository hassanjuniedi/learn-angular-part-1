import { Component, OnInit } from '@angular/core';
import { faLaptop, faLayerGroup, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  faLaptop = faLaptop;
  faLayerGroup = faLayerGroup;
  faCheckCircle = faCheckCircle;
  constructor() { }

  ngOnInit() {
  }

}
