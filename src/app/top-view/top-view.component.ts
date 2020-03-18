import { Component, OnInit, Input } from '@angular/core';
import {NumbsService} from '../shared/numbs.service';

@Component({
  selector: 'app-top-view',
  templateUrl: './top-view.component.html',
  styleUrls: ['./top-view.component.styl']
})
export class TopViewComponent implements OnInit {
  // @Input() topButtons: TopButton[] = [];
  public  teststst: number[]  = [101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119,
    120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130];
  constructor(private numService: NumbsService) { }

  ngOnInit() {

  }

  closess(i:number) { 
    // this.topButtons[i].visible = false;
    this.numService.delById(i);
  }

  delLastFromTop(){
    this.numService.delLast();
  }
  ClearFromTop(){
    this.numService.delAll();
  }

   

}
