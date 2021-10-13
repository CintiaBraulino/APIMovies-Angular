import { ModuleWithProviders, NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import { HomeAdmComponent } from "./home-adm/home-adm.component";
import { HomeComponent } from './home/home.component';
import { ListMoviesComponent } from "./home/list-movies/list-movies.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from './services/auth.guard';



const routes: Routes= [

  { path:'', component: HomeComponent },
  { path:'Login', component: LoginComponent },
  { path:'ListMovies', component: ListMoviesComponent},
  { path:'HomeAdm', component: HomeAdmComponent, canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{ }
