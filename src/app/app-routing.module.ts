import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component_vol_2/login/login.component';
import { MoviesComponent } from './component_vol_2/movies/movies.component';
import { ProfileComponent } from './component_vol_2/profile/profile.component';
import { RegisterComponent } from './component_vol_2/register/register.component';
import { TestComponent } from './component_vol_2/test/test.component';

const routes: Routes = [
  { path: 'login' , component: LoginComponent},
  { path: 'register' , component: RegisterComponent},
  { path: 'profile' , component: ProfileComponent},
  { path: 'movies' , component: MoviesComponent},
  { path: 'asd' , component: TestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
