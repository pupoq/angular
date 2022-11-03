import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  

  public asd: string = 'asd'

  transform(value: string, prefix: string, operator: 'uppercase' | 'lowercase' = 'uppercase'): string {
    console.log('TextPipe', value)

    value = !value ? prefix: prefix + " " + value

    switch(operator){
      case "uppercase":
        return value.toUpperCase()

      default:

        return value.toLowerCase()
    }

  }


}
