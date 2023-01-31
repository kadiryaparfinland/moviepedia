import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KidsComponent } from './kids/kids.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { TvseriesComponent } from './tvseries/tvseries.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'tvseries', component: TvseriesComponent},
  { path: 'kids', component: KidsComponent},
  { path: 'moviedetails/:id', component: MoviedetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
