import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/resources/movie';
import { EventDataService } from 'src/app/services/event-data.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-save-movie',
  templateUrl: './save-movie.component.html',
  styleUrls: ['./save-movie.component.scss']
})
export class SaveMovieComponent implements OnInit {
  
  id:any;
  movie: Movie={
    id: '',
    title: '',
    synopsis: '',
    image: '',
    releaseDate: '',
    duration: '',
    language: {
      id: 0,
      name: '',
      tag: ''
    },
    category: {
      id: 0,
      name: '',
      tag: ''
    },
    active: false
  };

 isLoadingResults = true;
  

  constructor( private movieService: MovieService, public eventDataService: EventDataService, private router: Router, private route: ActivatedRoute, 
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getMovie();
  }

  getMovie() {
    this.movieService.getMovie(this.id).subscribe(data => {
      this.movie = data;
      console.log(this.movie);
      this.isLoadingResults = false;
    });
  }
  updateMovie(){
    this.movieService.upadateMovie(this.movie).subscribe(data =>{
    })
  }

  deleteMovie(){
    this.movieService.deleteUser(this.movie).subscribe(data=>{
    })
  }

  
 }

