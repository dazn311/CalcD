export class DigNumer {
  private status: string;
  private arr: string[];
  private arrType: string[];
  private arrExpr: string[];

  private inc: number;

  private countPoint: number;
  constructor(n) {
    this.status = 'primier';

    this.arr =         ['0', '0', '0', '+', '0', '0', '-', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',
      '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'];
    this.arrType =     ['n', 'o', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'o', 'n', 'n', 'n', 'n',
      'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n'];
    this.arrExpr =     ['', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',
      '0', '0', '0', '0', '0', '0', '0', '0'];

    this.inc = -1;


    this.countPoint = 0;

  }

  addPoint() {
    if (this.inc > -1) {
      if (this.countPoint === 0) {
        if (this.arrType[this.inc] === 'n') {
          this.inc += 1;
          this.arr[this.inc] = '.';
          this.arrType[this.inc] = 'p';

          this.arrExpr[this.inc] = this.arrExpr[this.inc - 1] + '.';
          this.countPoint = 1;
          return 1;
        } else if (this.arrType[this.inc] === 'o') {
          this.inc += 1;
          this.arr[this.inc] = '0';
          this.arrType[this.inc] = 'p';

          this.arrExpr[this.inc] = this.arrExpr[this.inc - 1] + '0';

          this.inc += 1;
          this.arr[this.inc] = '.';
          this.arrType[this.inc] = 'p';

          this.arrExpr[this.inc] = this.arrExpr[this.inc - 1] + '.';
          this.countPoint = 1;
          return 2;

        } else if (this.arrType[this.inc] === 'p') {
          return false;

        }
      } else {
        return false;
      }



    } else if (this.inc === -1) {
      this.inc += 1;
      this.arr[this.inc] = '0';
      this.arrType[this.inc] = 'p';

      this.arrExpr[this.inc] =  '0';

      this.inc += 1;
      this.arr[this.inc] = '.';
      this.arrType[this.inc] = 'p';

      this.arrExpr[this.inc] = this.arrExpr[this.inc - 1] + '.';
      return 2;
    } else {
      return false;
    }


  }

  setStatus(d) {
    this.status = d;
  }
  bs() {
    if (this.inc === -1) {
      return undefined;
    }
    return this.inc--;
  }
  getInclement() {
    return this.inc;
  }
  getExpression() {
    // color = typeof color !== 'undefined' ? color : 'ball2 redball';
    return this.arrExpr[this.inc];
  }



  addNum(d) {
    this.inc += 1;
    this.arr[this.inc] = d;
    this.arrType[this.inc] = 'n';
    if (this.inc > 0) {
      this.arrExpr[this.inc] = this.arrExpr[this.inc - 1] + d;

    } else {
      this.arrExpr[this.inc] = d;
    }




    return this.inc;
  }
  addOperator(o) {
    if (this.arrType[this.inc] === 'n') {
      this.inc += 1;
      this.arr[this.inc] = o;
      this.arrType[this.inc] = 'o';


      if (this.inc > 0) {
        this.arrExpr[this.inc] = this.arrExpr[this.inc - 1] + ' ' + o + ' ';

      } else if (o === '-') {
        this.arrExpr[this.inc] = o;
      }

      this.countPoint = 0;
      return this.inc;
    }
    return undefined;


  }




}
