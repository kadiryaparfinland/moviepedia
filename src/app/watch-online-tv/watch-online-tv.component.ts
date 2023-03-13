import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyDataService } from '../services/my-data.service';

@Component({
  selector: 'app-watch-online-tv',
  templateUrl: './watch-online-tv.component.html',
  styleUrls: ['./watch-online-tv.component.css']
})
export class WatchOnlineTvComponent implements OnInit  {

  movie: any;  //this is the object that will hold the movie details
  results: any = [];
  regions: any = [];
  selectedRegion!: string;
  defaultSelectedCountry!: string;
  watchList: any;
  watchListLink: string = '';
  watchListFlatrate: any = [];
  watchListRent: any = [];
  watchListBuy: any[] = [];
  //watchListCountries: any = [];
  movieId: string = '';
  movieName: string = '';
  moviePosterPath: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient, private myDataService: MyDataService) { }

  ngOnInit(): void {

    this.movieId = this.route.snapshot.params['id'];

    this.http.get<any[]>('https://api.themoviedb.org/3/watch/providers/regions?api_key=dc92a7524c83f242a3237b2222941f00&language=en-US')
      .subscribe(data => {
        this.results = data;
        for (let item of this.results.results) {
          this.regions.push(item);
          if(item.iso_3166_1 === 'FI'){
            this.defaultSelectedCountry = item.english_name;
            this.selectedRegion = item.iso_3166_1;
            this.getWatchList();
            //console.log('default selected country: '+this.selectedRegion);
          }
        }
        //this.regions = results.;
        //this.selectedRegion = this.regions[0].iso_3166_1; // set the default selected region
      });

    
    this.myDataService.getTvSeriesDetails(this.movieId).subscribe((movie) => {

      this.movie = movie;
      this.moviePosterPath = 'https://image.tmdb.org/t/p/w500'+this.movie.poster_path;
      this.movieName = this.movie.original_name;
      
    });

   

  }

  getWatchList(){
    this.myDataService.getOnlineWatchListTv(this.movieId).subscribe((movie) => {
        
      this.watchList = movie.results[this.selectedRegion];
      this.watchListLink = this.watchList.link;
      this.watchListFlatrate = this.watchList.flatrate;
     
      this.watchListRent = this.watchList.rent;
     
      this.watchListBuy = this.watchList.buy;
   
      //console.log('watch list countries: '+this.watchList.link);
      
      
      //console.log('watch list 1:');
      //console.log('watch list: '+this.watchList);

  });

  }

  onSelect(regions: any) {

    this.selectedRegion = regions.target.value;
    //console.log('selected region: '+this.selectedRegion);
    this.getWatchList();

  }


}
