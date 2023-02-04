import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { MainrandommovieComponent } from './mainrandommovie/mainrandommovie.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { TopratedmoviesComponent } from './topratedmovies/topratedmovies.component';
import { PopularmoviesComponent } from './popularmovies/popularmovies.component';
import { ActionmoviesComponent } from './actionmovies/actionmovies.component';
import { SciencefictionmoviesComponent } from './sciencefictionmovies/sciencefictionmovies.component';
import { FamilymoviesComponent } from './familymovies/familymovies.component';
import { ComedymoviesComponent } from './comedymovies/comedymovies.component';
import { WarmoviesComponent } from './warmovies/warmovies.component';
import { CrimemoviesComponent } from './crimemovies/crimemovies.component';
import { HistorymoviesComponent } from './historymovies/historymovies.component';
import { DocumentarymoviesComponent } from './documentarymovies/documentarymovies.component';
import { RomanticmoviesComponent } from './romanticmovies/romanticmovies.component';
import { TvseriesComponent } from './tvseries/tvseries.component';
import { KidsComponent } from './kids/kids.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { MovieCastComponent } from './movie-cast/movie-cast.component';
import { MovieImagesComponent } from './movie-images/movie-images.component';
import { MovieYoutubeFragmentComponent } from './movie-youtube-fragment/movie-youtube-fragment.component';
import { SimilarMoviesComponent } from './similar-movies/similar-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainrandommovieComponent,
    HomeComponent,
    TopratedmoviesComponent,
    PopularmoviesComponent,
    ActionmoviesComponent,
    SciencefictionmoviesComponent,
    FamilymoviesComponent,
    ComedymoviesComponent,
    WarmoviesComponent,
    CrimemoviesComponent,
    HistorymoviesComponent,
    DocumentarymoviesComponent,
    RomanticmoviesComponent,
    TvseriesComponent,
    KidsComponent,
    MoviedetailsComponent,
    MovieCastComponent,
    MovieImagesComponent,
    MovieYoutubeFragmentComponent,
    SimilarMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
