import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss']
})
export class NewCategoryComponent implements OnInit {

  account = {
    id:'',
    name: '',
    tag: '',
    language: {id: 0}
  };

  constructor(private categoryService: CategoryService){

  }

  ngOnInit(){

  }
  async onSubmit(){
    try{
      const result = await this.categoryService.create(this.account);
      console.log(result);
    } catch (error){
      console.error(error);
      }
    }

}
