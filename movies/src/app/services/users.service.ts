import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,  of, throwError} from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './../resources/user';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userUrl = environment.api;

constructor (private http: HttpClient) {

}

  listar(){
    return this.http.get<User[]>(`${this.userUrl}/api`);
  }

 async create(account:any){
   const result= await this.http.post<any>(`${environment.api}/api/registerUser`,account).toPromise();
   return result;
 }

 getUser(id: number): Observable<User>{
   const url = `${environment.api}/api/listUser/${id}`
   return this.http.get<User>(url).pipe(
     tap(_ =>console.log(`leu user id = ${id}`)),
     catchError(this.handleError<User>(`getUser id=${id}`))
   );
 }
 upadateUser(users:any){
  return this.http.put<any>(`${environment.api}/api/updateUser`,users);
 }

 deleteUser(users:any){
  return this.http.put<any>(`${environment.api}/api/deleteUser`,users);
 }

//intercepta o erro
 private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    console.error(error);

    return of(result as T);
  };
}

}


