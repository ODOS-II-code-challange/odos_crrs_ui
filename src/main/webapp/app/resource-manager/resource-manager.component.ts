import { Component, OnInit } from '@angular/core';
import { Principal } from '../shared';

@Component({
  selector: 'jhi-resource-manager',
  templateUrl: './resource-manager.component.html',
  styleUrls: [
    'resource-manager.scss'
  ]
})
export class ResourceManagerComponent implements OnInit {
  
  constructor() { }
  selectedResource:string;

  resources = ["Building", "Conference Room", "Equipment"];
  ngOnInit() {
    this.selectedResource = this.resources[0];
    console.log("Principal user name"+Principal.name);
  }

}
