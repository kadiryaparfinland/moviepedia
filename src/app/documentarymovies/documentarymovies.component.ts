import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../services/my-data.service';

@Component({
  selector: 'app-documentarymovies',
  templateUrl: './documentarymovies.component.html',
  styleUrls: ['./documentarymovies.component.css']
})
export class DocumentarymoviesComponent implements OnInit {

  movieId: number = 0;
  myMovies: any;
  topRatedMovies: any = [];
  topRatedMoviesList: any = [];
  movieTitle: string = '';
  movieReleaseDate: string = '';
  movieVoteAverage: string = '';
  moviePosterPath: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private myDataService: MyDataService) { }

  ngOnInit() {
    this.myDataService.getDocumentaryMovies().subscribe((movies) => {

      this.topRatedMovies = movies;

      for (let item of this.topRatedMovies.results) {
        this.topRatedMoviesList.push(item);
      } 

      this.movieId = this.topRatedMoviesList[0].id;
      this.moviePosterPath += this.topRatedMoviesList[0].poster_path;
      this.movieTitle = this.topRatedMoviesList[0].title;
      this.movieReleaseDate = 'Release Date: ' + this.topRatedMoviesList[0].release_date;
      this.movieVoteAverage = 'User Score: ' + this.topRatedMoviesList[0].vote_average;

    });
  }

}
