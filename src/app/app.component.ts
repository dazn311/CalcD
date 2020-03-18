import { Component } from '@angular/core';

export interface TopButton {
  id: number;
  title: string;
  visible: boolean;
  color: string;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'calcD';


}




