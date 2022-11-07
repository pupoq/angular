import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profiles: Map<string, string>

  constructor(
  ){
    this.profiles = new Map<string, string>()
    this.profiles.set('admin', '12345')
  }

}
