import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(
    public posts: PostService
  ) { }

  name = ''
  moreInfo2 = ''

  ngOnInit(): void {
  }
  addPost(word: string, moreInfo: string){
    this.posts.addPost(word, moreInfo)
  }

  moreInfo(name: string, moreInfo: string){
    this.name = name
    this.moreInfo2 = moreInfo
  }

}
