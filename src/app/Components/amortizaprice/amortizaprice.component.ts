import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amortizaprice',
  templateUrl: './amortizaprice.component.html',
  styleUrls: ['./amortizaprice.component.css'],
})
export class AmortizapriceComponent implements OnInit {
  public vl: number;
  public i: number;
  public t: number;

  constructor() {}

  ngOnInit() {}

  getSplit() {
    return (this.vl * this.i) / (1 - 1 / Math.pow(1 + this.i, this.t));
  }

  getPeriods() {
    var periods = [];
    for (var i = 1; i <= this.t; i++) {
      periods.push(i);
    }
    return periods;
  }

  getInterest(n: number) {
    var value = this.vl;
    for (var i = 0; i < n; i++) {
      value = value + value * this.i - this.getSplit();
    }
    return value * this.i;
  }

  getAmortization(n: number) {
    var value = this.vl;
    for (var i = 0; i < n; i++) {
      value = value + value * this.i - this.getSplit();
    }
    return this.getSplit() - value * this.i;
  }

  getBalance(n: number) {
    var value = this.vl;
    for (var i = 0; i < n; i++) {
      value = value + value * this.i - this.getSplit();
    }
    return value;
  }
}
