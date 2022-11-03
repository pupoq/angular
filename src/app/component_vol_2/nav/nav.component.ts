import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitters/Emitters';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  authenticated = false;

  constructor() { }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth
      }
    )
  }

}
