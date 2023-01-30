import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TvseriesComponent } from './tvseries/tvseries.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'tvseries', component: TvseriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
