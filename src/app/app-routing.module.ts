import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KidsComponent } from './kids/kids.component';
import { LoginComponent } from './login/login.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { MyListComponent } from './my-list/my-list.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { TvSeriesDetailsComponent } from './tv-series-details/tv-series-details.component';
import { TvseriesComponent } from './tvseries/tvseries.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'tvseries', component: TvseriesComponent},
  { path: 'kids', component: KidsComponent},
  { path: 'mylist', component: MyListComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'search', component: SearchComponent},
  { path: 'moviedetails/:id', component: MoviedetailsComponent},
  { path: 'tv-series-details/:id', component: TvSeriesDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
