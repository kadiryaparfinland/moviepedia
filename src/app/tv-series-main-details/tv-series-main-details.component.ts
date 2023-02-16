import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyDataService } from '../services/my-data.service';
import { AngularFireModule } from '@angular/fire/compat';
import { PLATFORM_ID } from '@angular/core';
import { Movie } from '../model/movie';
import { DataService } from '../shared/data.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, first } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-tv-series-main-details',
  templateUrl: './tv-series-main-details.component.html',
  styleUrls: ['./tv-series-main-details.component.css']
})
export class TvSeriesMainDetailsComponent implements OnInit {

  movieList : Movie[] = [];  // this will hold the list of movies using the model class
  movieObject: Movie = { movieId: ''};  // this will hold the movie details using the model class
  

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

  movieGenreNames: any = [];

  movieProductionCountries: any = [];
  movieProductionCountry: string = '';
  movieProductionCountryList: string = '';

  movieStatus: string = '';
  movieTagline: string = '';
  movieBudget: string = '';
  movieRevenue: string = '';
  movieRuntime: string = '';
  movieHomepage: string = '';
  movieImdbId: string = '';

  addedToMyList: boolean = false;
  addedToMyListDocumentNumber: string = '';
  userUid: string = '';
  isLoggedIn: boolean = false; 

  tvSeriesNumberofEpisodes: string = '';
  tvSeriesNumberofSeasons: string = '';


  //private firestore: AngularFireModule;
  
  constructor(private route: ActivatedRoute, private http: HttpClient, private myDataService: MyDataService, private data: DataService,
    public fireAuth: AngularFireAuth, private afs: AngularFirestore) { 
    
    //this.firestore = new AngularFireModule(PLATFORM_ID);


    
  }

  //this.findUserUid(); //this method checks if the user is logged in
  getUid() {
    this.fireAuth.authState.pipe(first()).subscribe(
      user => {
        this.isLoggedIn = !!user;
        user ? this.userUid = user.uid : this.userUid = '';
        this.getAllMovieInfoFromMyList(); //this method checks if the movie is already in the user's list
      }
    );
  }



  ngOnInit(): void {

    this.movieId = this.route.snapshot.params['id'];

    this.getUid();
   

    this.myDataService.getTvSeriesDetails(this.movieId).subscribe((movie) => {

      this.movie = movie;
      this.movieTitle = this.movie.original_name;
      this.moviePosterPath += this.movie.poster_path;
      this.movieBackdropPath += this.movie.backdrop_path;
      this.movieOverview = this.movie.overview;
      this.movieReleaseDate = this.movie.first_air_date;
      this.movieVoteCount = this.movie.vote_count;
      this.movieVoteAverage = this.movie.vote_average.toFixed(1) + '/10';
      this.movieOriginalLanguage = 'Original Language: ' + this.movie.original_language.toUpperCase();
      
      this.movieStatus = 'Status: ' + this.movie.status;
      this.movieTagline = this.movie.tagline;

      //this.movieBudget = 'Budget: ' + this.movie.budget.toLocaleString('en-US') + ' USD';
      //this.movieRevenue = 'Revenue: ' + this.movie.revenue.toLocaleString('en-US') + ' USD';
      this.movieRuntime = this.movie.episode_run_time + ' minutes';
      this.movieHomepage = this.movie.homepage;
      //console.log("tv home page:" + this.movieHomepage);
      this.movieImdbId = 'IMDB ID: ' + this.movie.imdb_id;

      for (let i = 0; i < this.movie.genres.length; i++) {
        this.movieGenreNames.push(this.movie.genres[i].name);
      }
      this.movieGenreNames = this.movieGenreNames.join(', ');

      this.movieProductionCountries = this.movie.production_countries;
      this.movieProductionCountryList = 'Production Countries: ';
      this.movieProductionCountry = '';
      this.movieProductionCountryList = '';

      this.tvSeriesNumberofEpisodes = 'Number of Episodes: ' + this.movie.number_of_episodes;
      this.tvSeriesNumberofSeasons = 'Number of Seasons: ' + this.movie.number_of_seasons;

    });

  }

  goToMovieHomepage(url: string) {
  
    if(url == null) {
      return alert('Homepage is not available for this tv series');
    }
    else{
      window.open(url, '_blank');
    }
    
  }

  goToTrailer(el: HTMLElement) {
    el.scrollIntoView();
  }

  addToMyList() {
    this.getUid();
    if(this.isLoggedIn) {
      this.addedToMyList = true;
      this.movieObject.movieId = this.movieId;

      this.afs
        .collection('/UsersMyListData')
        .doc(this.userUid)
        .collection('tv_series_list')
        .doc()
        .set(this.movieObject);
    }
    else{
      return alert('Please login to add movie to your list');
    }
  }
  removeFromMyList() {
    this.getUid();
    this.addedToMyList = false;
    
      //console.log(this.userUid);
      this.afs
        .collection('/UsersMyListData')
        .doc(this.userUid)
        .collection('tv_series_list')
        .doc(this.addedToMyListDocumentNumber)
        .delete();
    
  }

  getAllMovieInfoFromMyList() {
    //this method checks if the movie is already in the user's list

    this.afs
        .collection('/UsersMyListData')
        .doc(this.userUid)
        .collection('tv_series_list')
        .get()
        .subscribe((querySnapshot) => {

          querySnapshot.forEach((doc) => {
            if(this.movieId == doc.data()['movieId'].toString()) {
              this.addedToMyList = true;
              this.addedToMyListDocumentNumber = doc.id;
            }
          } );

        });
    
  } 

}
