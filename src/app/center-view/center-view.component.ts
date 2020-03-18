import { Component, OnInit } from '@angular/core';
import {NumbsService} from '../shared/numbs.service';
// import {Observable, concat} from 'rxjs';
import { merge } from 'rxjs';
@Component({
  selector: 'app-center-view',
  templateUrl: './center-view.component.html',
  styleUrls: ['./center-view.component.styl']
})
export class CenterViewComponent implements OnInit {

   btnsCenter = [{id: 0, title: '7', data: '7', class: 'menuBall'}, {id: 1, title: '8', data: '8', class: 'menuBall'}, {id: 2, title: '9', data: '9', class: 'menuBall'}, {id: 3, title: '/', data: 'del', class: 'menuBall'},
                        {id: 4, title: '4', data: '4', class: 'menuBall'}, {id: 5, title: '5', data: '5', class: 'menuBall'}, {id: 6, title: '6', data: '6', class: 'menuBall'}, {id: 7, title: '*', data: 'umn', class: 'menuBall'},
                        {id: 8, title: '1', data: '1', class: 'menuBall'}, {id: 9, title: '2', data: '2', class: 'menuBall'}, {id: 10, title: '3', data: '3', class: 'menuBall'}, {id: 11, title: '-', data: '-', class: 'menuBall'},
                        {id: 12, title: '(', data: '(', class: 'menuBall'}, {id: 13, title: '0', data: '0', class: 'menuBall'}, {id: 14, title: ',', data: '.', class: 'menuBall'}, {id: 15, title: '+', data: '+', class: 'menuBall'}];


  constructor(private numbs: NumbsService) { }

  ngOnInit() {
  }

  addNum(title: string) {
    const setTitle$ = this.numbs.setTitle(title);
    const obs = merge(
      setTitle$
    );
    obs.subscribe(
      () => {
        console.log('subscribe obs');
      }
    );
    // this.numbs.obTopbtns.subscribe( value => {
    //   console.log(value);
    //
    // });


  }

}
