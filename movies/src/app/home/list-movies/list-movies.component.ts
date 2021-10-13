import { Component, OnInit } from '@angular/core';
import { MovieService } from './../../services/movie.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {

  movie: Array<any> = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.movieService.listar().subscribe(dados => this.movie = dados);
  }

}
