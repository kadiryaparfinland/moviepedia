import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../services/my-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-random-kids',
  templateUrl: './main-random-kids.component.html',
  styleUrls: ['./main-random-kids.component.css']
})
export class MainRandomKidsComponent implements OnInit {

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
    this.myDataService.getPopularKidMovies().subscribe((movies) => {
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

    });
  }

  goToMovieDetails(id: number){
    this.router.navigate(['moviedetails', id]);
  }

}
