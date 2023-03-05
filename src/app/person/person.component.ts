import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../services/my-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  cast: any;  //this is the object that will hold the cast details

  castId: string = '';
  castName: string = '';
  castProfilePath: string = 'https://image.tmdb.org/t/p/w500';
  castBiography: string = '';
  castBirthday: string = '';
  castPlaceOfBirth: string = '';
  castKnownForDepartment: string = '';
  castGender: string = '';

  //public birthdate: Date | undefined;
  public age!: number;
  timeDiff: any;


  constructor(private myDataService: MyDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.castId = this.route.snapshot.params['id'];
    this.myDataService.getPersonInfo(this.castId).subscribe((cast) => {

      this.cast = cast;

      this.castName = this.cast.name;
      this.castProfilePath = this.castProfilePath + this.cast.profile_path;
      this.castBiography = this.cast.biography;
      this.castBirthday = this.cast.birthday;
      this.castPlaceOfBirth = this.cast.place_of_birth;
      this.calculateAge();
      this.castKnownForDepartment = this.cast.known_for_department;
      this.castGender = this.cast.gender;
      if(this.castGender === '1'){
        this.castGender = 'Female';
      }
      else{
        this.castGender = 'Male';
      }

    });
    
  }

  public calculateAge(): void
     {
         if(this.castBirthday){
            const date = new Date(this.castBirthday); 
            this.timeDiff = Math.abs(<any>Date.now() - <any>date);
            //Used Math.floor instead of Math.ceil
            //so 26 years and 140 days would be considered as 26, not 27.
            this.age = Math.floor((this.timeDiff / (1000 * 3600 * 24))/365);
        }
    }


}
