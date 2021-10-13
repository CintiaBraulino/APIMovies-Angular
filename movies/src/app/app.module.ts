import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './home/shared/components/navbar/navbar.component';
import { CarouselComponent } from './home/shared/components/carousel/carousel.component';
import { CardComponent } from './home/shared/components/card/card.component'; 
import { AuthService } from './services/auth.service';
import { HomeAdmComponent } from './home-adm/home-adm.component';

import { httpInterceptorProviders } from './http-interceptors';
import { ListMoviesComponent } from './home/list-movies/list-movies.component';
import { MovieService } from './services/movie.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    CarouselComponent,
    CardComponent,
    HomeAdmComponent,
    ListMoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
  ],
  providers: [AuthService, httpInterceptorProviders, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
