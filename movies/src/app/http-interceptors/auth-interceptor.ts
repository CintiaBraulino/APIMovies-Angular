import { Injectable } from "@angular/core";
import { AuthService } from './../services/auth.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor(
    private authService: AuthService
  ){}

  intercept(req: HttpRequest<any>, next: HttpHandler){

    const token = this.authService.getAuthorizationToken();
    let request: HttpRequest<any> = req;

    if(token){
      request = req.clone({ //passo token de autenticacao no header
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
    }

    return next.handle(request) //tratamento de erro
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse){

    if (error.error instanceof ErrorEvent){ // erro client-side ou rede
      console.error('Ocorreu um erro:', error.error.message);
    } else {
      console.error(  //erro backend
        `Codigo do erro ${error.status},`  +  
        `Erro: ${JSON.stringify(error.error)}`
      );
    }

    return throwError('Ocorreu um error, tente novamente');
  } 
}