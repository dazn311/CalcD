import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-view',
  templateUrl: './bottom-view.component.html',
  styleUrls: ['./bottom-view.component.styl']
})
export class BottomViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  log(item) {
    console.log('item:' + item);
  }

}
