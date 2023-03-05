import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../services/my-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cast-known-movies',
  templateUrl: './cast-known-movies.component.html',
  styleUrls: ['./cast-known-movies.component.css']
})
export class CastKnownMoviesComponent implements OnInit {

  castId: string = '';
  movieId: number = 0;
  myMovies: any;
  topRatedMovies: any = [];
  topRatedMoviesList: any = [];

  
  tvSeriesId: number = 0;
  myTvSeries: any;
  topRatedTvSeries: any = [];
  topRatedTvSeriesList: any = [];

  constructor(private myDataService: MyDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.castId = this.route.snapshot.params['id'];
    this.myDataService.getPersonKnownMovies(this.castId).subscribe((movies) => {

      this.topRatedMovies = movies;

      for (let item of this.topRatedMovies.cast) {
        if (item.poster_path != null){
          this.topRatedMoviesList.push(item);
        }
        
      } 

      this.movieId = this.topRatedMoviesList[0].id;

    });


    this.myDataService.getPersonKnownTvs(this.castId).subscribe((tvSeries) => {

      this.topRatedTvSeries = tvSeries;

      for (let item of this.topRatedTvSeries.cast) {
        if (item.poster_path != null){
          this.topRatedTvSeriesList.push(item);
        }
        
      } 

      this.tvSeriesId = this.topRatedTvSeriesList[0].id;

    });
    
  }

  goToMovieDetails(id: number){
    this.router.navigate(['moviedetails', id]);
    this.router.navigate(['moviedetails', id]).then(page => {window.scrollTo(0, 0); })
  }

  goToTvDetails(id: number){
    this.router.navigate(['tv-series-details', id]);
    this.router.navigate(['tv-series-details', id]).then(page => {window.scrollTo(0, 0); })
  }

}
