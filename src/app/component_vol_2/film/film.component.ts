import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/service/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  constructor(
    public filmService: FilmService
  ) { }

  ngOnInit(): void {
  }

  getAllFilms(){
    this.filmService.getAll()
  }

  asd = Math.pow(3, 2)

}
