import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../services/my-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-similar-tv-series',
  templateUrl: './similar-tv-series.component.html',
  styleUrls: ['./similar-tv-series.component.css']
})
export class SimilarTvSeriesComponent implements OnInit {

  movieId: string = '';
  myMovies: any;
  topRatedMovies: any = [];
  topRatedMoviesList: any = [];
  movieTitle: string = '';
  movieReleaseDate: string = '';
  movieVoteAverage: string = '';
  moviePosterPath: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private myDataService: MyDataService, private route: ActivatedRoute, private router: Router) { 
    
  }

  ngOnInit() { 
    this.movieId = this.route.snapshot.params['id'];

    this.myDataService.getSimilarTvSeries(this.movieId).subscribe((movies) => {

      this.topRatedMovies = movies;

      for (let item of this.topRatedMovies.results) {
        if (item.poster_path != null){
          this.topRatedMoviesList.push(item);
        }
        
      } 

    });
  }
  
  goToMovieDetails(id: number){
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['tv-series-details', id], { queryParams: { index: 1 } });
    this.router.navigate(['tv-series-details', id]).then(page => {window.scrollTo(0, 0); })
      
  }
 /* goToPageZero(id: number){
    this.router.navigate(['moviedetails', id]).then(page => {window.scrollTo(0, 0); })
    
  } */

}
