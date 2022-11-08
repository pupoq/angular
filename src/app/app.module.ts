import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component.spec';
import { JokeComponent } from './component_vol_2/joke/joke.component';
import { JokeListComponent } from './component_vol_2/joke-list/joke-list.component';
import { NavComponent } from './component_vol_2/nav/nav.component';
import { LoginComponent } from './component_vol_2/login/login.component';
import { RegisterComponent } from './component_vol_2/register/register.component';
import { ProfileComponent } from './component_vol_2/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalcComponent } from './component_vol_2/calc/calc.component';
import { TextPipe } from './pipe/filter.pipe';
import { MoviesComponent } from './component_vol_2/movies/movies.component';
import { MovieComponent } from './component_vol_2/movie/movie.component';
import { TestComponent } from './component_vol_2/test/test.component';
import { AsdComponent } from './component_vol_2/asd/asd.component';
import { StudentComponent } from './component_vol_2/student/student.component';
import { BeverageComponent } from './component_vol_2/beverage/beverage.component';
import { LogComponent } from './component_vol_2/log/log.component';
import { RegComponent } from './component_vol_2/reg/reg.component';
import { PostComponent } from './component_vol_2/post/post.component';
import { FilmComponent } from './component_vol_2/film/film.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    JokeListComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    CalcComponent,
    TextPipe,
    MoviesComponent,
    MovieComponent,
    TestComponent,
    AsdComponent,
    StudentComponent,
    BeverageComponent,
    LogComponent,
    RegComponent,
    PostComponent,
    FilmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
