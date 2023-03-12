import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  getMovieCasts(movieId: string) {
    return this.http.get('https://api.themoviedb.org/3/movie/'+movieId+'/credits?api_key=dc92a7524c83f242a3237b2222941f00&language=en-US');
  }

  getMovieImages(movieId: string) {
    return this.http.get('https://api.themoviedb.org/3/movie/'+movieId+'/images?api_key=dc92a7524c83f242a3237b2222941f00');
  }
  
  getMovieVideos(movieId: string) {
    return this.http.get('https://api.themoviedb.org/3/movie/'+movieId+'/videos?api_key=dc92a7524c83f242a3237b2222941f00&language=en-US');
  }

  getSimilarMovies(movieId: string) {
    return this.http.get('https://api.themoviedb.org/3/movie/'+movieId+'/similar?api_key=dc92a7524c83f242a3237b2222941f00&language=en-US&page=1');
  }

  getPopularTvSeries() {
    return this.http.get('https://api.themoviedb.org/3/tv/popular?api_key=dc92a7524c83f242a3237b2222941f00&language=en-US&page=1');
  }

  getTopRatedTvSeries() {
    return this.http.get('https://api.themoviedb.org/3/tv/top_rated?api_key=dc92a7524c83f242a3237b2222941f00&language=en-US&page=1');
  }

  getActionTvSeries() {
    return this.http.get('https://api.themoviedb.org/3/discover/tv?api_key=dc92a7524c83f242a3237b2222941f00&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10759&include_null_first_air_dates=false');
  }

  getSciFicTvSeries() {
    return this.http.get('https://api.themoviedb.org/3/discover/tv?api_key=dc92a7524c83f242a3237b2222941f00&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10765&include_null_first_air_dates=false');
  }

  getFamilyTvSeries() {
    return this.http.get('https://api.themoviedb.org/3/discover/tv?api_key=dc92a7524c83f242a3237b2222941f00&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10751&include_null_first_air_dates=false');
  }

  getComedyTvSeries() {
    return this.http.get('https://api.themoviedb.org/3/discover/tv?api_key=dc92a7524c83f242a3237b2222941f00&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=35&include_null_first_air_dates=false');
  }

  getWarTvSeries() {
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=dc92a7524c83f242a3237b2222941f00&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10752');
  }

  getCrimeTvSeries() {
    return this.http.get('https://api.themoviedb.org/3/discover/tv?api_key=dc92a7524c83f242a3237b2222941f00&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=80&include_null_first_air_dates=false');
  }

  getWesternTvSeries() {
    return this.http.get('https://api.themoviedb.org/3/discover/tv?api_key=dc92a7524c83f242a3237b2222941f00&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=37&include_null_first_air_dates=false');
  }

  getDocumentaryTvSeries() {
    return this.http.get('https://api.themoviedb.org/3/discover/tv?api_key=dc92a7524c83f242a3237b2222941f00&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=99&include_null_first_air_dates=false');
  }

  getDramaTvSeries() {
    return this.http.get('https://api.themoviedb.org/3/discover/tv?api_key=dc92a7524c83f242a3237b2222941f00&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=18&include_null_first_air_dates=false');
  }

  getTvSeriesDetails(tvSeriesId: string) {
    return this.http.get('https://api.themoviedb.org/3/tv/'+tvSeriesId+'?api_key=dc92a7524c83f242a3237b2222941f00&language=en-US');
  }
  
  getTvSeriesCasts(tvSeriesId: string) {
    return this.http.get('https://api.themoviedb.org/3/tv/'+tvSeriesId+'/credits?api_key=dc92a7524c83f242a3237b2222941f00&language=en-US');
  }

  getTvSeriesImages(tvSeriesId: string) {
    return this.http.get('https://api.themoviedb.org/3/tv/'+tvSeriesId+'/images?api_key=dc92a7524c83f242a3237b2222941f00');
  }

  getTvSeriesVideos(tvSeriesId: string) {
    return this.http.get('https://api.themoviedb.org/3/tv/'+tvSeriesId+'/videos?api_key=dc92a7524c83f242a3237b2222941f00&language=en-US');
  }

  getSimilarTvSeries(tvSeriesId: string) {
    return this.http.get('https://api.themoviedb.org/3/tv/'+tvSeriesId+'/similar?api_key=dc92a7524c83f242a3237b2222941f00&language=en-US&page=1');
  }

  getPopularKidMovies() {
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=dc92a7524c83f242a3237b2222941f00&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16%2C10751');
  }
  
  getTopRatedKidMovies() {
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=dc92a7524c83f242a3237b2222941f00&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&with_genres=16%2C10751');
  }

  getSearchResultsForMovie(searchWord: string) : Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=dc92a7524c83f242a3237b2222941f00&language=en-US&query='+searchWord+'&page=1&include_adult=false');
  }

  getSearchResultsForTv(searchWord: string) : Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/search/tv?api_key=dc92a7524c83f242a3237b2222941f00&language=en-US&page=1&query='+searchWord+'&include_adult=false');
  }

  getSearchResultsForPerson(searchWord: string) : Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/search/person?api_key=dc92a7524c83f242a3237b2222941f00&language=en-US&query='+searchWord+'&page=1&include_adult=false');
  }

  getPersonInfo(castId: string) : Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/person/'+castId+'?api_key=dc92a7524c83f242a3237b2222941f00&language=en-US');
  }
  getPersonKnownTvs(castId: string) : Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/person/'+castId+'/tv_credits?api_key=dc92a7524c83f242a3237b2222941f00&language=en-US');
  }

  getPersonKnownMovies(castId: string) : Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/person/'+castId+'/movie_credits?api_key=dc92a7524c83f242a3237b2222941f00&language=en-US');
  }

  getOnlineWatchList(movieId: string) : Observable<any> {
   return this.http.get('https://api.themoviedb.org/3/movie/'+movieId+'/watch/providers?api_key=dc92a7524c83f242a3237b2222941f00');
  }

  getCountryList(){
    return this.http.get('https://api.themoviedb.org/3/watch/providers/regions?api_key=dc92a7524c83f242a3237b2222941f00&language=en-US');
   }
}
