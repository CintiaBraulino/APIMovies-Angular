import { Component, OnInit } from '@angular/core';
import { MovieService } from './../../services/movie.service';
import { Movie } from './../../resources/movie';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {

  movie: Array<any> = [];
  title!: string;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.listar().subscribe((response) =>{ this.movie = response;});
    
  }

  listar(){
    this.movieService.listar().subscribe(dados => this.movie = dados);
  }

  Search(){
    if(this.title != ""){
      this.movie = this.movie.filter(res =>{
        return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
      });
    } else if (this.title ==""){
      this.ngOnInit();
    }  
  }
 


}
