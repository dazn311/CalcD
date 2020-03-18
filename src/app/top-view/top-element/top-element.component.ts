import {Component, Input, OnInit} from '@angular/core';
import {NumbsService} from '../../shared/numbs.service';

@Component({
  selector: 'app-top-element',
  templateUrl: './top-element.component.html',
  styleUrls: ['./top-element.component.styl']
})
export class TopElementComponent implements OnInit {
   

  constructor(public num: NumbsService) { }
  private doubleClick =  0;
  //=============================================

  ngOnInit() {
    
  }
  //--------------------------------

  closess(id: number) {
    if (this.doubleClick === id) {
         this.num.delById(id - 101);
         this.doubleClick = 0;
       
    } else {
      this.doubleClick = id;

    }

  }


}
