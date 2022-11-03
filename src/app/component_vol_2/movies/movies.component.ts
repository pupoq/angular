import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieComponent } from '../movie/movie.component';
import { Movie, Product } from 'src/app/model/model';
import { AppService } from 'src/app/service/app.service';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})

export class MoviesComponent implements OnInit {

  constructor(
    private movieService:  AppService,
    private http: HttpClient
  ) { }

  term = ''

  $movies!: Observable<Product[]>

  ngOnInit(): void  {
    // this.$movies = this.movieService.getAll()
    console.log(this.$movies)
  }

  products = [
    {id: 1, title: "Star Wars", hours: 15, image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/6cd691e19fffbe57b353cb120deaeb8f_8489d7bf-24ba-4848-9d0f-11f20cb35025_500x749.jpg?v=1573613877"},
    {id: 2, title: "Jurasic Period", hours: 5, image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/e50345d7cfee907ad63bb835109b37b9_263eaa00-ac40-4a0e-b2d7-86bb4ac69c90_500x749.jpg?v=1573584652"},
    {id: 3, title: "Raiders", hours: 2, image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/609df06d7c2b5fb3125f16a7e4e34152_592ed277-d9d9-4400-af4b-f793370e5f54_500x749.jpg?v=1573616163"},
    {id: 4, title: "Ghosts", hours: 3, image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/cedcf0e4209895fce418196e333507ad_54154c41-79c2-4688-93e6-88283b8cfd36_500x749.jpg?v=1573592554"}
  ]
}
