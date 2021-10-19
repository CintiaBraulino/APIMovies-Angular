import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventDataService } from 'src/app/services/event-data.service';
import { User } from './../../resources/user';
import { UsersService } from './../../services/users.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users$!: Observable<User[]>;

  constructor(private usersService: UsersService, private router: Router,
    private route: ActivatedRoute, public eventDataService: EventDataService) { }


  ngOnInit(){
    this.users$ = this.usersService.listar();
  }

  getById(id: string) {
    localStorage.setItem('userId', id);
    this.eventDataService.setEvent(id);
    this.router.navigate(['/SaveUser'])
  }

}


