import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = environment.url;

  constructor(private http: HttpClient) { }

  // call server to generate token
  generateToken(credentials: any) {
    return this.http.post(`${this.url}/authenticate`, credentials)
  }

  //for login user
  loginUser(token) {

    localStorage.setItem('token', token)
    return true;
  }

  isLoggedIn() {

    let token = localStorage.getItem('token');

    if (token == undefined || token == '' || token == null) {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    localStorage.removeItem('token');
    return true;
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
