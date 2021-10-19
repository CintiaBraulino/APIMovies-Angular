import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventDataService } from 'src/app/services/event-data.service';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/resources/user';

@Component({
  selector: 'app-save-user',
  templateUrl: './save-user.component.html',
  styleUrls: ['./save-user.component.scss']
})
export class SaveUserComponent implements OnInit {
  
  id:any;
  users: User = {
    id: '',
    name: '',
    cpf: '',
    phone_number: '',
    email: '',
    password: '',
    language: {
      id: 0,
      name: '',
      tag: ''
    },
    profile: [],
    activite: false
  }
  isLoadingResults = true;

 constructor(private usersService: UsersService,  public eventDataService: EventDataService,
   private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(){
  this.id = this.route.snapshot.params['id'];
  this.getUser();
  }
  

  getUser() {
    this.usersService.getUser(this.id).subscribe(data => {
      this.users = data;
      console.log(this.users);
      this.isLoadingResults = false;
    });
  }
  
  updateUser(){
    this.usersService.upadateUser(this.users).subscribe(data =>{
    })
  }

  deleteUser(){
    this.usersService.deleteUser(this.users).subscribe(data=>{
    })
  }
}
  


