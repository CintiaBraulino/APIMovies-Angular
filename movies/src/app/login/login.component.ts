import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login = {
    email : '',
    password:''
  };
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  async onSubmit(){
    try{
      const result = await this.authService.login(this.login);
      console.log(`Login efetuado: ${result}`);

      this.router.navigate(['HomeAdm']);
    } catch (error) {
      console.error(error);
    }
  }

}
