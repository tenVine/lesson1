import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-item',
  template: `
    <p>child warning-item works!</p>
  `
})
export class WarningItemComponent implements OnInit {

    constructor() { }
  
    ngOnInit() {
    }
  
  }
