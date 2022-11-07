import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts = [{
    name: 'Mr Poop',
    moreInfo: 'he loves pooping'
  },
  {
    name: 'James Bond',
    moreInfo: 'shake but do not mix'
  },
  {
    name: 'Ronaldo',
    moreInfo: 'SIIIIIIIIIIIII'
  }
]
  constructor() { }

  addPost(name: string, moreInfo: string){
    let obj = {name, moreInfo}
    this.posts.push(obj)
  }
}
