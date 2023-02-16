import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyDataService } from '../services/my-data.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-tv-series-youtube-trailer',
  templateUrl: './tv-series-youtube-trailer.component.html',
  styleUrls: ['./tv-series-youtube-trailer.component.css']
})
export class TvSeriesYoutubeTrailerComponent implements OnInit {

  movieId: string = '';
  movieVideos: any;
  movieVideosList: any = [];
  movieTrailerPath: string = 'https://www.youtube.com/embed/';
  movieTrailerPathSafeUrl!: SafeResourceUrl;
  

  constructor(private route: ActivatedRoute, private http: HttpClient, private myDataService: MyDataService, private sanitizer: DomSanitizer) { }

  ngOnInit() {

    this.movieId = this.route.snapshot.params['id'];
    //console.log(this.movieId);

    this.myDataService.getTvSeriesVideos(this.movieId).subscribe((videos) => {

      this.movieVideos = videos;

      for (let item of this.movieVideos.results) {
        if(item.type == "Trailer"){
          this.movieTrailerPath += item.key;
          break;
        }
      } 
      this.movieTrailerPathSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.movieTrailerPath);
          //console.log(this.movieTrailerPathSafeUrl.toString());
    });
  }

}
