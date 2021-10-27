import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Category } from './../resources/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  useUrl = environment.api;

  constructor (private http: HttpClient) {
  
  }
  
    listar(){
      return this.http.get<Category[]>(`${this.useUrl}/category`);
    }
    listCategory(){
      return this.http.get<Category[]>(`${this.useUrl}/category`);
    }


    async create(account:any){
      const result= await this.http.post<any>(`${environment.api}/category/regiterCategory`,account).toPromise();
      return result;
    }

    getCategory(id: number): Observable<Category>{
      const url = `${environment.api}/category/listCategory/${id}`
      return this.http.get<Category>(url).pipe(
        tap(_ =>console.log(`leu user id = ${id}`)),
        catchError(this.handleError<Category>(`getUser id=${id}`))
      );
    }

    upadateCategory(category:any){
      return this.http.put<any>(`${environment.api}/category/updateCategory`,category);
    }
    
     deleteCategory(category:any){
      return this.http.put<any>(`${environment.api}/category/deleteCategory`,category);
    }
  
    //intercepta o erro
  private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    console.error(error);

    return of(result as T);
  };
}

}
