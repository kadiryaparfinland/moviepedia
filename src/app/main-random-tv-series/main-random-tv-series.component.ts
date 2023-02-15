import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../services/my-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-random-tv-series',
  templateUrl: './main-random-tv-series.component.html',
  styleUrls: ['./main-random-tv-series.component.css']
})
export class MainRandomTvSeriesComponent  implements OnInit {

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

  constructor( private myDataService: MyDataService, private router: Router) { 
    
  }

  ngOnInit() {
    this.myDataService.getPopularTvSeries().subscribe((movies) => {
      this.popularMovies = movies;
      this.moviePosterPath += this.popularMovies.results[this.randomNumber].poster_path;
      this.movieTitle = this.popularMovies.results[this.randomNumber].name;
      this.movieImageBackDropPath += this.popularMovies.results[this.randomNumber].backdrop_path;
      this.movieId = this.popularMovies.results[this.randomNumber].id;
      this.movieOverview = this.popularMovies.results[this.randomNumber].overview;
      this.movieReleaseDate = 'Release Date: ' + this.popularMovies.results[this.randomNumber].first_air_date;
      this.movieVoteAverage = 'User Score: ' + this.popularMovies.results[this.randomNumber].vote_average;
      this.movieVoteCount = 'User Vote Count: ' + this.popularMovies.results[this.randomNumber].vote_count;
      this.movieGenres = this.popularMovies.results[this.randomNumber].genre_ids;

    });
  }

  goToMovieDetails(id: number){
    this.router.navigate(['tv-series-details', id]);
  }


}
