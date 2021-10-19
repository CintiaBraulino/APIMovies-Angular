import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { EventDataService } from 'src/app/services/event-data.service';
import { Category } from './../../resources/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  category$!: Observable<Category[]>;

  constructor(private categoryService: CategoryService, private router: Router,
    private route: ActivatedRoute, public eventDataService: EventDataService) { }


  ngOnInit(){
    this.category$ = this.categoryService.listar();
  }

}
