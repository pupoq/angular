import { Component, OnInit, Input} from '@angular/core';

class Joke {
  public setup ?: string
  public punchline? : string
  public hide? : boolean

  constructor(setup: string, punchline: string) {
      this.setup = setup
      this.punchline = punchline
      this.hide = true
  }

  toggle(){
      this.hide != this.hide
  }
}

@Component({
  selector: 'app-joke',
  // templateUrl: './joke.component.html',
  template: `
    <div class='card card-block'>
      <h4 class="card-title">
        <ng-content select=".setup"></ng-content>
      </h4>
      <p class='card-text'>
          <ng-content select="punchline"></ng-content>
      </p> 
      <a class="btn btn-primary">Tell me</a>
    </div>
  `,
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {

  @Input('joke') data!: Joke 

  constructor() {
    console.log('constructor')
   }

  ngOnChanges() {
    console.log('NG on change')
  }

  ngOnInit() {
    console.log('On init')
  }

  ngDoCheck () {
    console.log('do check')
  }

  ngAfterContentInit () {
    console.log('ng after content init')
  }

  ngAfterContentCheck () {
    console.log('ng after content check')
  }

  ngAfterContentChecked () {
    console.log('ng after content checked')
  }

  ngAfterViewInit () {
    console.log('ng after view init')
  }

  ngAfterViewChecked () {
    console.log('ng after view Checked')
  }

}
