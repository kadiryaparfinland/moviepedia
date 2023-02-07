import { Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  email: string = '';
  password: string = '';

  
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {

   
  }

  login() {
    if (this.email == '' || this.password == '') {
      alert('Please enter email and password');
      return;
    }
    else{
      this.auth.login(this.email, this.password);
      this.email = '';
      this.password = '';
    }
  }


}
