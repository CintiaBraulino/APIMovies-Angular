import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home-adm',
  templateUrl: './home-adm.component.html',
  styleUrls: ['./home-adm.component.scss']
})
export class HomeAdmComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }


  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['Login']);
  }

}
