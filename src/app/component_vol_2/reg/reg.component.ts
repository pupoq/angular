import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {


  ngOnInit(): void {
  }

  login = ''
  password = ''
  repeatPassword = ''


  constructor(
    private service: ProfileService
  ) { }

  register(){
    if(this.password !== '' && this.login == this.repeatPassword){
      this.service.profiles.set(this.login, this.password)
    } else {
      alert('Error')
    }
  }

}
