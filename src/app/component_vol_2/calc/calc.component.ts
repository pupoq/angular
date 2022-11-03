import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent {

  constructor() { }

  @Input() _mongth: number = 0;
  @Input() _sum: number = 0;

  perMonth = 0

  set mongths(val: number){
  this.mongths = val
  this.perMonth = this._mongth / this._sum
  }


  set sum(val: number){
    this._sum = val
    this.perMonth = this._mongth / this._sum
  }
}
