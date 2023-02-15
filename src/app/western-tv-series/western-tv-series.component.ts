import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../services/my-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-western-tv-series',
  templateUrl: './western-tv-series.component.html',
  styleUrls: ['./western-tv-series.component.css']
})
export class WesternTvSeriesComponent implements OnInit {

  movieId: number = 0;
  myMovies: any;
  topRatedMovies: any = [];
  topRatedMoviesList: any = [];
  movieTitle: string = '';
  movieReleaseDate: string = '';
  movieVoteAverage: string = '';
  moviePosterPath: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private myDataService: MyDataService, private router: Router) { }

  ngOnInit() {
    this.myDataService.getWesternTvSeries().subscribe((movies) => {

      this.topRatedMovies = movies;

      for (let item of this.topRatedMovies.results) {
        this.topRatedMoviesList.push(item);
      } 

      this.movieId = this.topRatedMoviesList[0].id;
      this.moviePosterPath += this.topRatedMoviesList[0].poster_path;
      this.movieTitle = this.topRatedMoviesList[0].name;
      this.movieReleaseDate = 'Release Date: ' + this.topRatedMoviesList[0].first_air_date;
      this.movieVoteAverage = 'User Score: ' + this.topRatedMoviesList[0].vote_average;


    });
  }
  
  goToMovieDetails(id: number){
    this.router.navigate(['tv-series-details', id]);
    this.router.navigate(['tv-series-details', id]).then(page => {window.scrollTo(0, 0); })
  }
  

}
