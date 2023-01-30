import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../services/my-data.service';

@Component({
  selector: 'app-mainrandommovie',
  templateUrl: './mainrandommovie.component.html',
  styleUrls: ['./mainrandommovie.component.css']
})
export class MainrandommovieComponent implements OnInit {

  myMovies: any;
  popularMovies: any = [];
  popularMoviesPosterPaths: any = [];
  randomNumber: number = Math.floor(Math.random() * 19);

  moviePosterPath: string = 'https://image.tmdb.org/t/p/w500/';
  movieTitle: string = '';
  movieImageBackDropPath: string = 'https://image.tmdb.org/t/p/w500/';
  movieId: number = 0;
  movieOverview: string = '';
  movieReleaseDate: string = '';
  movieVoteAverage: string = '';
  movieVoteCount: string = '';
  movieGenres: any = [];



  constructor( private myDataService: MyDataService) { 
    
  }

 

  ngOnInit() {
    this.myDataService.getPopularMovies().subscribe((movies) => {
      this.popularMovies = movies;
      this.moviePosterPath += this.popularMovies.results[this.randomNumber].poster_path;
      this.movieTitle = this.popularMovies.results[this.randomNumber].title;
      this.movieImageBackDropPath += this.popularMovies.results[this.randomNumber].backdrop_path;
      this.movieId = this.popularMovies.results[this.randomNumber].id;
      this.movieOverview = this.popularMovies.results[this.randomNumber].overview;
      this.movieReleaseDate = 'Release Date: ' + this.popularMovies.results[this.randomNumber].release_date;
      this.movieVoteAverage = 'User Score: ' + this.popularMovies.results[this.randomNumber].vote_average;
      this.movieVoteCount = 'User Vote Count: ' + this.popularMovies.results[this.randomNumber].vote_count;
      this.movieGenres = this.popularMovies.results[this.randomNumber].genre_ids;

      
     /*  console.log(this.popularMovies.results[this.randomNumber].title);
      console.log('randomNumber:' + this.randomNumber);

      for (let item of this.popularMovies.results) {
        this.popularMoviesPosterPaths.push(item.poster_path);
        //console.log('poster path: ' + item.poster_path);
      } */

    });
  }

}
