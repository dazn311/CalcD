import {Injectable} from '@angular/core';
import {TopButton} from '../app.component';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'

})

export class NumbsService {
  public topButtons: TopButton[] = [
    // {id: 101, title: '1', visible: false, color: 'redball2'},
    // {id: 102, title: '2', visible: false, color: 'redball2'},
    // {id: 103, title: '3', visible: false, color: 'redball2'},
    // {id: 104, title: '4', visible: false, color: 'redball2'},
    // {id: 105, title: '5', visible: false, color: 'redball2'},
    // {id: 106, title: '6', visible: false, color: 'redball2'},
    // {id: 107, title: '1', visible: false, color: 'redball2'},
    // {id: 108, title: '2', visible: false, color: 'redball2'},
    // {id: 109, title: '3', visible: false, color: 'redball2'},
    // {id: 110, title: '4', visible: false, color: 'redball2'},
    // {id: 111, title: '5', visible: false, color: 'redball2'},
    // {id: 112, title: '6', visible: false, color: 'redball2'},
    // {id: 113, title: '1', visible: false, color: 'redball2'},
    // {id: 114, title: '2', visible: false, color: 'redball2'},
    // {id: 115, title: '3', visible: false, color: 'redball2'},
    // {id: 116, title: '4', visible: false, color: 'redball2'},
    // {id: 117, title: '5', visible: false, color: 'redball2'},
    // {id: 118, title: '6', visible: false, color: 'redball2'},
    // {id: 119, title: '1', visible: false, color: 'redball2'},
    // {id: 120, title: '2', visible: false, color: 'redball2'},
    // {id: 121, title: '3', visible: false, color: 'redball2'},
    // {id: 122, title: '4', visible: false, color: 'redball2'},
    // {id: 123, title: '5', visible: false, color: 'redball2'},
    // {id: 124, title: '6', visible: false, color: 'redball2'},
    // {id: 125, title: '1', visible: false, color: 'redball2'},
    // {id: 126, title: '2', visible: false, color: 'redball2'},
    // {id: 127, title: '3', visible: false, color: 'redball2'},
    // {id: 128, title: '4', visible: false, color: 'redball2'},
    // {id: 129, title: '5', visible: false, color: 'redball2'},
    // {id: 130, title: '6', visible: false, color: 'redball2'}
  ];
  private i = 101;

  // public obTopbtns: Observable<TopButton[]> =  new Observable<TopButton[]>( observer => {
  //   observer.next(this.topButtons);
  // });



  setTitle(t: string) {
    // this.topButtons[this.i].title = t;
    // this.topButtons[this.i].visible = true;

    this.topButtons.push({id: this.i, title: t, visible: true, color: 'redball2'});
    this.i += 1;
    return of(true);
  }
  delLast() {
    this.topButtons.splice(-1,1);
    this.i -= 1;
  }
  delById(id:number) {
    console.log('delbyid i:',id);

    this.topButtons.splice(id,1);
    this.topButtons.forEach((el,ind) => {
      el.id = ind + 101;
    });
    console.log('this.topButtons.length :', this.topButtons.length);
    this.i -= 1;
  }
  delAll() {
    this.topButtons = [];
    console.log('this.topButtons.length :', this.topButtons.length);
    this.i = 101;
  }

}
