import { Component } from '@angular/core';
import { concatWith } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'samuraiProject002';

  SimonAge : number = 23;
  KristineAge: number = 20;

  SimonName : string = "Simon";
  KristineName : string = "Kristine";

  

  ngOnInit(): void {
    console.log("Frist test");
    
    //Invoke a function
    this.Create();
  }

  Create(): void {
    console.log("Create function is called!");
  }

  AgeMultiplyer(): void {
    var MultiplyedAge = this.SimonAge*this.KristineAge;
    return console.log(MultiplyedAge);
  }

}
