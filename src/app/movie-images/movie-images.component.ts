import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyDataService } from '../services/my-data.service';

@Component({
  selector: 'app-movie-images',
  templateUrl: './movie-images.component.html',
  styleUrls: ['./movie-images.component.css']
})
export class MovieImagesComponent implements OnInit {

  movieId: string = '';
  movieImages: any;
  movieImagesList: any = [];
  castImagePath: string = 'https://image.tmdb.org/t/p/w500';
  

  constructor(private route: ActivatedRoute, private http: HttpClient, private myDataService: MyDataService) { }

  ngOnInit() {

    this.movieId = this.route.snapshot.params['id'];
    //console.log(this.movieId);

    this.myDataService.getMovieImages(this.movieId).subscribe((images) => {

      this.movieImages = images;

      for (let item of this.movieImages.backdrops) {
        if(item.file_path != null){
          this.movieImagesList.push(item);
        }
        
      } 

    });
  }
  
  goToMovieImages(id: number){
    //this.route.navigate(['moviedetails', id]);
  }

}
