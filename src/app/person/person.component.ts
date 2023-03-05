import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../services/my-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  movieId: string = '';

  constructor(private myDataService: MyDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.movieId = this.route.snapshot.params['id'];

    
  }


}
