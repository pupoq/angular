import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public city: string = 'Astana'

  public container: any[] =[
    {city: 'Astana', population: 1000000},
    {city: 'Mumbai', population: 19000000},
    {city: 'Tokyo', population: 13000000}
  ]

  // public date = new Date()

  public message: string = 'The cities are listed'

}
