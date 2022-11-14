import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poop',
  templateUrl: './poop.component.html',
  styleUrls: ['./poop.component.scss']
})
export class PoopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay()
    return day !== 0
  }

}
