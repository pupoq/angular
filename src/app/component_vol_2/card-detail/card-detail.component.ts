import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {

  @Input() user!: Data

  ibj: any

  id: any
  data: any
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getUserById(this.id)
  }

  getUserById(id: number): void {
    this.id = id
    this.dataService.getUserById(this.id)
    .subscribe(res => {
      this.data = res
      this.user = this.data
      console.log(this.user)
      this.ibj = this.user
    })
  }

}
