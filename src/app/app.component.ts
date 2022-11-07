import { Component } from '@angular/core';
import { AppService } from './service/app.service';
import { DrinkService } from './service/drink.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  

  // public asd: string = 'asd'

  // transform(value: string, prefix: string, operator: 'uppercase' | 'lowercase' = 'uppercase'): string {
  //   console.log('TextPipe', value)

  //   value = !value ? prefix: prefix + " " + value

  //   switch(operator){
  //     case "uppercase":
  //       return value.toUpperCase()

  //     default:

  //       return value.toLowerCase()
  //   }

  // }

  title = 'lesson-pipes'

  currentBeverage = 'coffee'
  
  constructor(
    public beverageService: DrinkService
  ){}

    addBeverage(newBeverage: string){
      this.beverageService.addBeverage(newBeverage)
      console.log(newBeverage)
    }

}
