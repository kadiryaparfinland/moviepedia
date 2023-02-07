import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private afs : AngularFirestore) { }

  //add movie info to firestore
  addMovieToMyList(movie: Movie) {
    return this.afs.collection('/UsersMyListData').doc().set(movie);
  }

//remove movie info from firestore
  removeMovieFromMyList(movie: Movie) {
    return this.afs.collection('UsersMyListData').doc().delete();
  }

  /*   //get movie info from firestore
  getAllMovieInfoFromMyList(movie: Movie) {
    return this.afs.collection('UsersMyListData').doc().snapshotChanges();
  } */

}
