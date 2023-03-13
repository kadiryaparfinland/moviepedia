import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { LoginComponent } from './login/login.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { RegisterComponent } from './register/register.component';
import { MainRandomTvSeriesComponent } from './main-random-tv-series/main-random-tv-series.component';
import { TvSeriesDetailsComponent } from './tv-series-details/tv-series-details.component';
import { TopRatedTvSeriesComponent } from './top-rated-tv-series/top-rated-tv-series.component';
import { PopularTvSeriesComponent } from './popular-tv-series/popular-tv-series.component';
import { ActionTvSeriesComponent } from './action-tv-series/action-tv-series.component';
import { SciFicTvSeriesComponent } from './sci-fic-tv-series/sci-fic-tv-series.component';
import { FamilyTvSeriesComponent } from './family-tv-series/family-tv-series.component';
import { ComedyTvSeriesComponent } from './comedy-tv-series/comedy-tv-series.component';
import { WarTvSeriesComponent } from './war-tv-series/war-tv-series.component';
import { CrimeTvSeriesComponent } from './crime-tv-series/crime-tv-series.component';
import { WesternTvSeriesComponent } from './western-tv-series/western-tv-series.component';
import { DocumentaryTvSeriesComponent } from './documentary-tv-series/documentary-tv-series.component';
import { DramaTvSeriesComponent } from './drama-tv-series/drama-tv-series.component';
import { TvSeriesMainDetailsComponent } from './tv-series-main-details/tv-series-main-details.component';
import { TvSeriesCastComponent } from './tv-series-cast/tv-series-cast.component';
import { TvSeriesImagesComponent } from './tv-series-images/tv-series-images.component';
import { TvSeriesYoutubeTrailerComponent } from './tv-series-youtube-trailer/tv-series-youtube-trailer.component';
import { SimilarTvSeriesComponent } from './similar-tv-series/similar-tv-series.component';
import { MainRandomKidsComponent } from './main-random-kids/main-random-kids.component';
import { TopRatedKidMoviesComponent } from './top-rated-kid-movies/top-rated-kid-movies.component';
import { PopularKidMoviesComponent } from './popular-kid-movies/popular-kid-movies.component';
import { MyListComponent } from './my-list/my-list.component';
import { SearchComponent } from './search/search.component';
import { PersonComponent } from './person/person.component';
import { CastKnownMoviesComponent } from './cast-known-movies/cast-known-movies.component';
import { WatchOnlineComponent } from './watch-online/watch-online.component';
import { WatchOnlineTvComponent } from './watch-online-tv/watch-online-tv.component';

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
    SimilarMoviesComponent,
    LoginComponent,
    RegisterComponent,
    MainRandomTvSeriesComponent,
    TvSeriesDetailsComponent,
    TopRatedTvSeriesComponent,
    PopularTvSeriesComponent,
    ActionTvSeriesComponent,
    SciFicTvSeriesComponent,
    FamilyTvSeriesComponent,
    ComedyTvSeriesComponent,
    WarTvSeriesComponent,
    CrimeTvSeriesComponent,
    WesternTvSeriesComponent,
    DocumentaryTvSeriesComponent,
    DramaTvSeriesComponent,
    TvSeriesMainDetailsComponent,
    TvSeriesCastComponent,
    TvSeriesImagesComponent,
    TvSeriesYoutubeTrailerComponent,
    SimilarTvSeriesComponent,
    MainRandomKidsComponent,
    TopRatedKidMoviesComponent,
    PopularKidMoviesComponent,
    MyListComponent,
    SearchComponent,
    PersonComponent,
    CastKnownMoviesComponent,
    WatchOnlineComponent,
    WatchOnlineTvComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage()),
    
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
