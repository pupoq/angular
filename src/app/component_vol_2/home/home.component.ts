import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { APIRepsonse } from "src/app/model/model";
import { DataService } from "src/app/service/data.service";

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss'],
})

export class HomeComponent implements OnInit {

    users$: Observable<APIRepsonse> = new Observable()
    constructor(
        private dataService: DataService
    ){

    }
    
    ngOnInit(): void {
        this.users$ = this.dataService.getUsers()
        console.log(this.users$)
    }
}