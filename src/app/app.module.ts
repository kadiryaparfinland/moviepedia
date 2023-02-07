import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
