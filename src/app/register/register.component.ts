import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  email: string = '';
  password: string = '';

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {

  }

  register() {
    if (this.email == '' || this.password == '') {
      alert('Please enter email and password');
      return;
    }
    else{
      this.auth.register(this.email, this.password);
      this.email = '';
      this.password = '';
    }
  }

}
