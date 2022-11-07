import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DrinkService } from 'src/app/service/drink.service';

@Component({
  selector: 'app-beverage',
  templateUrl: './beverage.component.html',
  styleUrls: ['./beverage.component.scss']
})
export class BeverageComponent implements OnInit {

  constructor(public drinkService: DrinkService) { }

  @Input() beverage = 'tea'
  @Output() newBeverageEvent = new EventEmitter<string>()

  ngOnInit(): void {
  }

  addNewBeverage(value: string){
    this.newBeverageEvent.emit(value)
  }
}
