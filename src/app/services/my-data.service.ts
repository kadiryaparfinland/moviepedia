import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {

  constructor( private http: HttpClient) { }

  getPopularMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=dc92a7524c83f242a3237b2222941f00&language=en-US&page=1');
  }

  getTopRatedMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=dc92a7524c83f242a3237b2222941f00&language=en-US&page=1');
  }

  getActionMovies() {
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=dc92a7524c83f242a3237b2222941f00&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28');
  }

  getScienceFictionMovies() {
    return this.http.get('https://api.themoviedb.org/3/discover/tv?api_key=dc92a7524c83f242a3237b2222941f00&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10765&include_null_first_air_dates=false');
  }

  getFamilyMovies() {
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=dc92a7524c83f242a3237b2222941f00&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751');
  }

  getComedyMovies() {
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=dc92a7524c83f242a3237b2222941f00&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35');
  }

  getWarMovies() {
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=dc92a7524c83f242a3237b2222941f00&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10752');
  }

  getCrimeMovies() {
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=dc92a7524c83f242a3237b2222941f00&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=80');
  }

  getHistoryMovies() {
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=dc92a7524c83f242a3237b2222941f00&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=36');
  }

  getDocumentaryMovies() {
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=dc92a7524c83f242a3237b2222941f00&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2020&with_genres=99&without_keywords=158436%7C445%7C11530%7C7344%7C199723%7C206574%7C109520');
  }

  getRomanticMovies() {
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=dc92a7524c83f242a3237b2222941f00&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749');
  }

  getMovieDetails(movieId: string) {
    return this.http.get('https://api.themoviedb.org/3/movie/'+movieId+'?api_key=dc92a7524c83f242a3237b2222941f00&language=en-US');
  }

  

}
