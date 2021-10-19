import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { EventDataService } from 'src/app/services/event-data.service';
import { Category } from './../../../resources/category';

@Component({
  selector: 'app-save-category',
  templateUrl: './save-category.component.html',
  styleUrls: ['./save-category.component.scss']
})
export class SaveCategoryComponent implements OnInit {

  id:any;
  category: Category = {
    id: '',
    name: '',
    tag: '',
    active: false,
    language: {
      id: 0,
      name: '',
      tag: ''
    }
  }
  isLoadingResults = true;

  constructor(private categoryService: CategoryService,  public eventDataService: EventDataService,
    private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getCategory();
  }

  getCategory() {
    this.categoryService.getCategory(this.id).subscribe(data => {
      this.category = data;
      console.log(this.category);
      this.isLoadingResults = false;
    });
  }

  updateCategory(){
    this.categoryService.upadateCategory(this.category).subscribe(data =>{
    })
  }

  deleteCategory(){
    this.categoryService.deleteCategory(this.category).subscribe(data=>{
    })
  }

}
