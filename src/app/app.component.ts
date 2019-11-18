import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  switch: boolean = true;
  text: string = 'Hide';

  showHide() {
    this.switch = !this.switch;
    this.switch ? this.text = 'Hide' : this.text = 'Show';
  }
  
}
