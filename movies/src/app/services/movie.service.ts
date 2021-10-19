import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { Movie } from './../resources/movie';

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

  async create(account:any){
    const result= await this.http.post<any>(`${environment.api}/movie/registerMovie`,account).toPromise();
    return result;
  }

  getMovie(id: number): Observable<Movie>{
    const url = `${environment.api}/movie/listMovie/${id}`
    return this.http.get<Movie>(url).pipe(
      tap(_ =>console.log(`leu user id = ${id}`)),
      catchError(this.handleError<Movie>(`getMovie id=${id}`))
    );
  }

  upadateMovie(movie:any){
    return this.http.put<any>(`${environment.api}/movie/updateMovie`,movie);
  }
  
   deleteUser(movie:any){
    return this.http.put<any>(`${environment.api}/movie/deleteMovie`,movie);
  }
  //intercepta o erro
 private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    console.error(error);

    return of(result as T);
  };
}


}
