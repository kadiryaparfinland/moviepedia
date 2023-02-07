import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth, private router: Router) { }

  login(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password).then((user) => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['home']);
    }).catch((error) => {
      if (error.code === 'auth/user-not-found') {
        alert('User not found. Please register');
      }
      else{
       alert(error.message);
       this.router.navigate(['login']);
      }
    });
  }

  register(email: string, password: string) {
    this.fireAuth.createUserWithEmailAndPassword(email, password).then((user) => {
      alert('User created successfully');
      localStorage.setItem('token', 'true');
      this.router.navigate(['home']);
    }).catch((error) => {
      alert(error.message);
    });
  }

  logout() {
    this.fireAuth.signOut();
    localStorage.removeItem('token');
  }
}
