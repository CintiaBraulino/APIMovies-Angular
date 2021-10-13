import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movieUrl = environment.api;

  constructor (private http: HttpClient) {

  }

  listar(){
    return this.http.get<any[]>(`${this.movieUrl}/movie`);
  }

}