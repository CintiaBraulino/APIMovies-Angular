import { Component, OnInit } from '@angular/core';
import { MovieService } from './../../../services/movie.service';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.scss']
})
export class NewMovieComponent implements OnInit {
  account = {
  id: '',
  title: '',
  synopsis: '',
  image: '',
  releaseDate: '',
  duration: '',
  language: {id:0},
  category: {id:0}
    };

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }
  
  async onSubmit(){
    try{
      const result = await this.movieService.create(this.account);
      console.log(result);
    } catch (error){
      console.error(error);
      }
    }

}
