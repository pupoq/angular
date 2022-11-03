import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asd',
  templateUrl: './asd.component.html',
  styleUrls: ['./asd.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsdComponent {

  constructor() { }

  title = 'lesson-pipes'

  transform(value: string, prefix: string, operator: 'uppercase' | 'lowercase' = 'uppercase'): string {
    console.log('AppComponent', value)

    value = !value ? prefix: prefix + " " + value

    switch(operator){
      case "uppercase":
        return value.toUpperCase()

      default:

        return value.toLowerCase()
    }

  }



}
