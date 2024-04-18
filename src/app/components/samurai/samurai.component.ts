import { Component } from '@angular/core';
import { Samurai } from 'src/app/models/Samurai';
import { SamuraiService } from 'src/app/services/samurai.service';

@Component({
  selector: 'app-samurai',
  templateUrl: './samurai.component.html',
  styleUrls: ['./samurai.component.css']
})
export class SamuraiComponent {

  samurai : Samurai = {};
  SamuraiList : Samurai[] = [];
  SamuraiList2 = [
    {Id: 1, Name:"Simon", Description:"Ginger",Age:25},
    {Id: 2, Name:"Lucas", Description:"Blond",Age:21},
    {Id: 3, Name:"Kristine", Description:"Blond",Age:23},
    {Id: 4, Name:"Selin", Description:"Mørk",Age:28},
  ];

  ngOnInit(): void {
    // this.samurai = {
    //   Id: 1,
    //   Name : "Simon",
    //   Description : "Ginger",
    //   Age : 23,
    // }

    this.SamuraiList = [
      {Id: 1, Name:"Simon", Description:"Ginger",Age:25},
      {Id: 2, Name:"Lucas", Description:"Blond",Age:21},
      {Id: 3, Name:"Kristine", Description:"Blond",Age:23},
      {Id: 4, Name:"Selin", Description:"Mørk",Age:28},
    ];

    // this.SamuraiList = this.samuraiService.getAll();
    // console.log(this.SamuraiList);

    this.service.getAll().subscribe(data => {
      this.SamuraiList = data;
      console.log(data)
      console.log(this.SamuraiList);
    });

  }



  getAll(): void {
    console.log(this.SamuraiList2);
  }

  constructor(private service: SamuraiService) {
    
    
  }

  getAll3(): void{
     
  }

}

