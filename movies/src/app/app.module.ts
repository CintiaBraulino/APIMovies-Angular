import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './home/shared/components/navbar/navbar.component';
import { CarouselComponent } from './home/shared/components/carousel/carousel.component';
import { AuthService } from './services/auth.service';
import { HomeAdmComponent } from './home-adm/home-adm.component';

import { httpInterceptorProviders } from './http-interceptors';
import { ListMoviesComponent } from './home/list-movies/list-movies.component';
import { MovieService } from './services/movie.service';
import { MovieComponent } from './home-adm/movie/movie.component';
import { UserComponent } from './home-adm/user/user.component';
import { NewUserComponent } from './home-adm/user/new-user/new-user.component';
import { SaveUserComponent } from './home-adm/user/save-user/save-user.component';
import { NewMovieComponent } from './home-adm/movie/new-movie/new-movie.component';
import { SaveMovieComponent } from './home-adm/movie/save-movie/save-movie.component';
import { CategoryComponent } from './home-adm/category/category.component';
import { NewCategoryComponent } from './home-adm/category/new-category/new-category.component';
import { SaveCategoryComponent } from './home-adm/category/save-category/save-category.component';
import { GenreMoviesComponent } from './home/genre-movies/genre-movies.component';
import { ThemeModule } from './theme/theme.module';
import { lightTheme } from './theme/light-theme';
import { darkTheme } from './theme/dark-theme';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    CarouselComponent,
    HomeAdmComponent,
    ListMoviesComponent,
    MovieComponent,
    UserComponent,
    NewUserComponent,
    SaveUserComponent,
    NewMovieComponent,
    SaveMovieComponent,
    CategoryComponent,
    NewCategoryComponent,
    SaveCategoryComponent,
    GenreMoviesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: 'light'
    })
  ],
   
  
  providers: [AuthService, httpInterceptorProviders, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
