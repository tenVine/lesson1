import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  template: `
    <p>Warning!</p>
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
