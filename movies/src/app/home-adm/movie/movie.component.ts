import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventDataService } from 'src/app/services/event-data.service';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from './../../resources/movie';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {


  movies$!: Observable<Movie[]>;
  
  constructor( private movieService: MovieService, private router: Router,
    private route: ActivatedRoute, public eventDataService: EventDataService) { }

  ngOnInit(){
    this.movies$ = this.movieService.listar();
  }

  

}
