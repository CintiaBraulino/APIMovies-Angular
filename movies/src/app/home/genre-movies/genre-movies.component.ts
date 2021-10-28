import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { MovieService } from 'src/app/services/movie.service';
import { Category } from './../../resources/category';



@Component({
  selector: 'app-genre-movies',
  templateUrl: './genre-movies.component.html',
  styleUrls: ['./genre-movies.component.scss']
})
export class GenreMoviesComponent implements OnInit {

  movie: Array<any> = [];
  category: Array<any> = [];
  cat!: string;
 
 
  constructor(private movieService: MovieService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.movieService.listar().subscribe((response) =>{ this.movie = response;});
    this.listCategory();
    
  }

  listCategory(){
    this.categoryService.listCategory().subscribe(dados => this.category = dados);
  }

  listar(){
    this.movieService.listar().subscribe(dados => this.movie = dados);
  }


  Search(){
      if(this.cat != ""){
        this.movie = this.movie.filter(res =>{
          return res.cat.toLocaleLowerCase().match(this.cat.toLocaleLowerCase());
        });
      } else if (this.cat ==""){
        this.ngOnInit();
      }  
  }

     
}

