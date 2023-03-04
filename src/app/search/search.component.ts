import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { MyDataService } from '../services/my-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  isSelectedMovie: boolean = true;
  isSelectedTv: boolean = false;
  isSelectedPerson: boolean = false;

  isSearchResultEmptyForMovie: boolean = false;
  isSearchResultEmptyForTv: boolean = false;
  isSearchResultEmptyForPerson: boolean = false;

  public movieList: Array<any> = [];
  public tvList: Array<any> = [];
  public personList: Array<any> = [];
  searchForm: FormGroup = new FormGroup({
    search: new FormControl('')
  });

  

  constructor(private apiService: MyDataService, private router: Router) { 


  }

  ngOnInit(): void {
    if(this.isSelectedMovie){
      this.toggleSelectedMovie();
    }
    else if(this.isSelectedTv){
      this.toggleSelectedTv();
    }
    else if(this.isSelectedPerson){
      this.toggleSelectedPerson();  
    }
  }

  goToMovieDetails(id: number){
    this.router.navigate(['moviedetails', id]);
    this.router.navigate(['moviedetails', id]).then(page => {window.scrollTo(0, 0); })
  }

  goToTvDetails(id: number){
    this.router.navigate(['tv-series-details', id]);
    this.router.navigate(['tv-series-details', id]).then(page => {window.scrollTo(0, 0); })
  }

  toggleSelectedMovie(){
    this.isSelectedMovie = true;
    this.isSelectedTv = false;
    this.isSelectedPerson = false;

    // this part is to get the movie search results
    //console.log("movie");
    this.searchForm.get('search')?.valueChanges.
    pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((value) => this.apiService.getSearchResultsForMovie(value))
    )      
    .subscribe(
      (value) => {
        
      this.movieList = value.results.filter((movie: any) => movie.poster_path != null);
      if(this.movieList.length == 0){
        this.isSearchResultEmptyForMovie = true;
      }
      else{
        this.isSearchResultEmptyForMovie = false;
      }
    
    }
    )
  

  }

  toggleSelectedTv(){
    this.isSelectedTv = true;
    this.isSelectedMovie = false;
    this.isSelectedPerson = false;

      // this part is to get the tv search results
      //console.log("tv");
      this.searchForm.get('search')?.valueChanges.
      pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((value) => this.apiService.getSearchResultsForTv(value))
      )      
      .subscribe(
        (value) => {
          
        this.tvList = value.results.filter((tv: any) => tv.poster_path != null);
        if(this.tvList.length == 0){
          this.isSearchResultEmptyForTv = true;
        }
        else{
          this.isSearchResultEmptyForTv = false;
        }
      
      }
      )
    

  }

  toggleSelectedPerson(){
    this.isSelectedPerson = true;
    this.isSelectedMovie = false;
    this.isSelectedTv = false;

     // this part is to get the person search results
     //console.log("person");
     this.searchForm.get('search')?.valueChanges.
     pipe(
       debounceTime(500),
       distinctUntilChanged(),
       switchMap((value) => this.apiService.getSearchResultsForPerson(value))
     )      
     .subscribe(
       (value) => {
         
       this.personList = value.results.filter((person: any) => person.profile_path != null);
       if(this.personList.length == 0){
         this.isSearchResultEmptyForPerson = true;
       }
       else{
         this.isSearchResultEmptyForPerson = false;
       }
     
     }
     )

  }

}

