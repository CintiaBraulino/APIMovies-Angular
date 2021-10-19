import { ModuleWithProviders, NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import { CategoryComponent } from "./home-adm/category/category.component";
import { NewCategoryComponent } from "./home-adm/category/new-category/new-category.component";
import { SaveCategoryComponent } from "./home-adm/category/save-category/save-category.component";
import { HomeAdmComponent } from "./home-adm/home-adm.component";
import { MovieComponent } from "./home-adm/movie/movie.component";
import { NewMovieComponent } from "./home-adm/movie/new-movie/new-movie.component";
import { SaveMovieComponent } from "./home-adm/movie/save-movie/save-movie.component";
import { NewUserComponent } from "./home-adm/user/new-user/new-user.component";
import { SaveUserComponent } from "./home-adm/user/save-user/save-user.component";
import { UserComponent } from "./home-adm/user/user.component";
import { HomeComponent } from './home/home.component';
import { ListMoviesComponent } from "./home/list-movies/list-movies.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from './services/auth.guard';



const routes: Routes= [

  { path:'', component: HomeComponent },
  { path:'Login', component: LoginComponent },
  { path:'ListMovies', component: ListMoviesComponent},
  { path:'HomeAdm', component: HomeAdmComponent, canActivate:[AuthGuard] },
  { path:'Movie', component: MovieComponent},
  { path: 'User', component: UserComponent},
  { path: 'NewUser', component: NewUserComponent},
  { path: 'SaveUser/:id', component: SaveUserComponent, canActivate:[AuthGuard]},
  { path: 'NewMovie', component: NewMovieComponent},
  { path: 'SaveMovie/:id', component: SaveMovieComponent},
  { path: 'Category', component: CategoryComponent},
  { path: 'NewCategory', component: NewCategoryComponent},
  { path: 'SaveCategory/:id', component: SaveCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{ }
