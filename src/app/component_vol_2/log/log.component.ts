import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/service/profile.service';


@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent {
  constructor(
    private service: ProfileService
  ) { }

  login: string = ''
  password: string = ''

  signIn(){
    let rightPassword = this.service.profiles.get(this.login)

    if(this.password === rightPassword){
      alert('Success')
    } else {
      alert('Incorrect login and password')
    }
    }
 
}
