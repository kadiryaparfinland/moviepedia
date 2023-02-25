import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../shared/auth.service';
import { BehaviorSubject, first } from 'rxjs';
import { Console } from 'console';
import { Router } from '@angular/router';
import { MyDataService } from '../services/my-data.service';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {

  userUid: string = '';
  isLoggedIn: boolean = false; 
  movieId: string = '';
  movieList: any = [];
  tvSeriesList: any = [];
  isMovieListEmpty: boolean = true;
  isTvSeriesListEmpty: boolean = true;

  movie: any;  //this is the object that will hold the movie details
  tvSeries: any;  //this is the object that will hold the tv series details

  
  movieTitle: string = '';
  moviePosterPath: string = 'https://image.tmdb.org/t/p/w500';
  movieReleaseDate: string = '';
  movieVoteAverage: string = '';

  
  topRatedMovies: any = [];
  topRatedMoviesList: any = [];
  topRatedTvSeriesList: any = [];

  constructor(public fireAuth: AngularFireAuth, private auth: AuthService, private afs: AngularFirestore, private router: Router, private myDataService: MyDataService) { }

  getUid() {
    this.fireAuth.authState.pipe(first()).subscribe(
      user => {
        this.isLoggedIn = !!user;
        user ? this.userUid = user.uid : this.userUid = '';
        this.getAllMovieInfoFromMyList(); //this method checks if the movie is already in the user's list
      }
    );
  }

  ngOnInit() {
    this.getUid();
    
  }

  getAllMovieInfoFromMyList() {
    //this method will bring all the movies in the user's list

    this.afs
        .collection('/UsersMyListData')
        .doc(this.userUid)
        .collection('movie_list')
        .get()
        .subscribe((querySnapshot) => {

          querySnapshot.forEach((doc) => {
            this.movieList.push(doc.data()['movieId'].toString());
          } );

          if(this.movieList.isEmpty) {
            this.isMovieListEmpty = true;
          } 
          else {
            this.isMovieListEmpty = false;
            for(let i = 0; i < this.movieList.length; i++) {
              this.myDataService.getMovieDetails(this.movieList[i]).subscribe((movie) => {
                this.movie = movie;
                this.topRatedMoviesList.push(this.movie);
              });
            }
          }

        });

        //this method will bring all the tv series in the user's list
        this.afs
        .collection('/UsersMyListData')
        .doc(this.userUid)
        .collection('tv_series_list')
        .get()
        .subscribe((querySnapshot) => {

          querySnapshot.forEach((doc) => {
            this.tvSeriesList.push(doc.data()['movieId'].toString());
          } );

          if(this.tvSeriesList.isEmpty) {
            this.isTvSeriesListEmpty = true;
          } 
          else {
            this.isTvSeriesListEmpty = false;
            for(let i = 0; i < this.tvSeriesList.length; i++) {
              this.myDataService.getTvSeriesDetails(this.tvSeriesList[i]).subscribe((tvSeries) => {
                this.tvSeries = tvSeries;
                this.topRatedTvSeriesList.push(this.tvSeries);
              });
            }
          }

        });
    
  }

  goToMovieDetails(id: number){
    this.router.navigate(['moviedetails', id]);
    this.router.navigate(['moviedetails', id]).then(page => {window.scrollTo(0, 0); })
  }

  goToTvSeriesDetails(id: number){
    this.router.navigate(['tv-series-details', id]);
    this.router.navigate(['tv-series-details', id]).then(page => {window.scrollTo(0, 0); })
  }

 

}
