import { Component } from '@angular/core';

class Joke {
  public setup?: string
  public punchline?: string
  public hide?: boolean

  constructor(setup: string, punchline: string) {
    this.setup = setup
    this.punchline = punchline
    this.hide = true
  }

  toggle() {
    this.hide != this.hide
  }
}

@Component({
  selector: 'app-joke-list',
  template: `
    <app-joke *ngFor="let item of joke" [joke]="item">
      <span>{{item.setup}}?</span>
      <h1 class="punchline">{{item.punchline}}</h1>
    </app-joke>
  `,
  styleUrls: ['./joke-list.component.scss']
})
export class JokeListComponent {

  joke: Joke[] = [];

  addJoke() {
    this.joke.unshift(
      new Joke(
        'what did the fox say',
        'Hello World'
      )
    )
  }

  deleteJoke() {
    this.joke = []
  }

}
