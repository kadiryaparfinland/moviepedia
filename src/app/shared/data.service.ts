import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Movie } from '../model/movie';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../shared/auth.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  
  userUid: string = '';

  constructor(
    private afs: AngularFirestore,
    public fireAuth: AngularFireAuth
  ) {}

  /* findUserUid() {
    this.fireAuth.currentUser.then((user) => {
      this.userUid = user!.uid;
      console.log('user uid:' + this.userUid);
    });
  } */

/*   //add movie info to firestore
  addMovieToMyList(movie: Movie) {
        return this.afs
        .collection('/UsersMyListData')
        .doc(this.userUid)
        .collection('movie_list')
        .doc()
        .set(movie);
  } */

/*   //remove movie info from firestore
  removeMovieFromMyList(documentId: string) {
    this.fireAuth.currentUser.then((user) => {
      this.userUid = user!.uid;
      //console.log(this.userUid);
      return this.afs
        .collection('/UsersMyListData')
        .doc(this.userUid)
        .collection('movie_list')
        .doc(documentId)
        .delete();
    });
    //return this.afs.collection('UsersMyListData').doc().delete();
  } */

 

}
