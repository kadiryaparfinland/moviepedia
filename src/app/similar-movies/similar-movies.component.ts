import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../services/my-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-similar-movies',
  templateUrl: './similar-movies.component.html',
  styleUrls: ['./similar-movies.component.css']
})
export class SimilarMoviesComponent implements OnInit {

  movieId: string = '';
  myMovies: any;
  topRatedMovies: any = [];
  topRatedMoviesList: any = [];
  movieTitle: string = '';
  movieReleaseDate: string = '';
  movieVoteAverage: string = '';
  moviePosterPath: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private myDataService: MyDataService, private route: ActivatedRoute, private router: Router) { 
    route.params.subscribe(val => {
      // put the code from `ngOnInit` here
      
    });
  }

  ngOnInit() { 
    this.movieId = this.route.snapshot.params['id'];

    this.myDataService.getSimilarMovies(this.movieId).subscribe((movies) => {

      this.topRatedMovies = movies;

      for (let item of this.topRatedMovies.results) {
        this.topRatedMoviesList.push(item);
      } 

    });
  }
  
  goToMovieDetails(id: number){
    this.router.navigate(['moviedetails', id]).then(page => {window.location.reload(); })
    
  }

}

