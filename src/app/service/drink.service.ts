import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {



  beverages = ['milk', 'tea', 'coffee', 'juice']
  constructor() { }

  addBeverage(newBeverage: string){
    this.beverages.push(newBeverage)
  }

}
