import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  template: `
    <p>Warning!</p>
    <app-warning-item></app-warning-item>
  `,
  styles: [`
    p { background-color: green; padding: 20px; color: white; }
  `]
})
export class WarningComponent implements OnInit {

    constructor() { }
  
    ngOnInit() {
    }
  
  }
