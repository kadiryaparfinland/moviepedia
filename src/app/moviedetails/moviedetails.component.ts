import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyDataService } from '../services/my-data.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css'],
  
})
export class MoviedetailsComponent implements OnInit {

  movie: any;  //this is the object that will hold the movie details

  movieId: string = '';
  movieTitle: string = '';
  moviePosterPath: string = 'https://image.tmdb.org/t/p/w500';
  movieBackdropPath: string = 'https://image.tmdb.org/t/p/w500';
  movieOverview: string = '';
  movieReleaseDate: string = '';
  movieVoteAverage: string = '';
  movieVoteCount: string = '';

  movieOriginalLanguage: string = '';

  movieGenreIds: any = [];
  movieGenreId: string = '';
  movieGenreNames: any = [];
  movieGenreName: string = '';
  movieGenreNameList: string = '';

  movieProductionCountries: any = [];
  movieProductionCountry: string = '';
  movieProductionCountryList: string = '';

  movieSpokenLanguages: any = [];
  movieSpokenLanguage: string = '';
  movieSpokenLanguageList: string = '';

  movieStatus: string = '';
  movieTagline: string = '';
  movieBudget: string = '';
  movieRevenue: string = '';
  movieRuntime: string = '';
  movieHomepage: string = '';
  movieImdbId: string = '';
  
  constructor(private route: ActivatedRoute, private http: HttpClient, private myDataService: MyDataService) { 
    
    
  }

  ngOnInit(): void {

    this.movieId = this.route.snapshot.params['id'];

    this.myDataService.getMovieDetails(this.movieId).subscribe((movie) => {

      this.movie = movie;
      this.movieTitle = this.movie.title;
      this.moviePosterPath += this.movie.poster_path;
      this.movieBackdropPath += this.movie.backdrop_path;
      this.movieOverview = this.movie.overview;
      this.movieReleaseDate = 'Release Date: ' + this.movie.release_date;
      this.movieVoteAverage = 'User Score: ' + this.movie.vote_average;
      this.movieVoteCount = 'User Votes: ' + this.movie.vote_count;
      this.movieOriginalLanguage = 'Original Language: ' + this.movie.original_language;
      this.movieGenreIds = this.movie.genre_ids;
      this.movieProductionCountries = this.movie.production_countries;
      this.movieSpokenLanguages = this.movie.spoken_languages;
      this.movieStatus = 'Status: ' + this.movie.status;
      this.movieTagline = 'Tagline: ' + this.movie.tagline;
      this.movieBudget = 'Budget: ' + this.movie.budget;
      this.movieRevenue = 'Revenue: ' + this.movie.revenue;
      this.movieRuntime = 'Runtime: ' + this.movie.runtime;
      this.movieHomepage = 'Homepage: ' + this.movie.homepage;
      this.movieImdbId = 'IMDB ID: ' + this.movie.imdb_id;
      this.movieGenreNames = this.movie.genres;
      this.movieGenreNameList = 'Genres: ';
      this.movieProductionCountryList = 'Production Countries: ';
      this.movieSpokenLanguageList = 'Spoken Languages: ';
      this.movieGenreName = '';
      this.movieProductionCountry = '';
      this.movieSpokenLanguage = '';
      this.movieGenreId = '';
      this.movieGenreNameList = '';
      this.movieProductionCountryList = '';
      this.movieSpokenLanguageList = '';

    });

 

  }

  }

