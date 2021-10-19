import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { empty } from 'rxjs';
import { User } from 'src/app/resources/user';
import { UsersService } from './../../../services/users.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  account = {
    id:'',
    name: '',
    cpf: '',
    phone_number: '',
    email: '',
    password: '',
    language: {id: 0}
  };

  constructor(private usersService: UsersService){

  }

  ngOnInit(){

  }
  async onSubmit(){
    try{
      const result = await this.usersService.create(this.account);
      console.log(result);
    } catch (error){
      console.error(error);
      }
    }

}

