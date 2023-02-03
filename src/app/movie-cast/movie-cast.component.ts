import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../services/my-data.service';
import { ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-cast',
  templateUrl: './movie-cast.component.html',
  styleUrls: ['./movie-cast.component.css']
})
export class MovieCastComponent  implements OnInit {

  movieId: string = '';
  movieCastId: string = '';
  movieCast: any;
  movieCasts: any = [];
  movieCastsList: any = [];
  castName: string = '';
  castCharacterName: string = '';
  castImagePath: string = 'https://image.tmdb.org/t/p/w500';
  

  constructor(private route: ActivatedRoute, private http: HttpClient, private myDataService: MyDataService) { }

  ngOnInit() {

    this.movieId = this.route.snapshot.params['id'];
    //console.log(this.movieId);

    this.myDataService.getMovieCasts(this.movieId).subscribe((casts) => {

      this.movieCasts = casts;

      for (let item of this.movieCasts.cast) {
        if(item.profile_path != null){
          this.movieCastsList.push(item);
        }
        
      } 

      this.movieCastId = this.movieCastsList[0].id;
      this.castImagePath += this.movieCastsList[0].profile_path;
      this.castName = this.movieCastsList[0].name;
      this.castCharacterName = this.movieCastsList[0].character;

    });
  }
  
  goToMovieDetails(id: number){
    //this.route.navigate(['moviedetails', id]);
  }


}
