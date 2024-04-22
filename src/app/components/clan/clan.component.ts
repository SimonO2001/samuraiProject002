import { Component } from '@angular/core';
import { Clan } from 'src/app/models/Clan';
import { ClanService } from 'src/app/services/clan.service';

@Component({
  selector: 'app-clan',
  templateUrl: './clan.component.html',
  styleUrls: ['./clan.component.css']
})
export class ClanComponent {
  Clanlist : Clan[] = [];

  Clanlist2 = [
    {Id: 1, Name:"Ginger", Symbol:"Ginger"},
    {Id: 2, Name:"Shit", Symbol:"Shit"},
    {Id: 3, Name:"Test", Symbol:"Test"},
    {Id: 4, Name:"Selin", Symbol:"Selin"},
  ];

  ngOnInit(): void {

    this.Clanlist = [
      {Id: 1, Name:"Ginger", Symbol:"Ginger"},
      {Id: 2, Name:"Shit", Symbol:"Shit"},
      {Id: 3, Name:"Test", Symbol:"Test"},
      {Id: 4, Name:"Selin", Symbol:"Selin"},
    ];


    this.service.getAll().subscribe((data: Clan[]) => {
      this.Clanlist = data;
      console.log(data)
      console.log(this.Clanlist);
    });

  }



  getAll(): void {
    console.log(this.Clanlist);
  }

  constructor(private service: ClanService) {
    
    
  }

  getAll3(): void{
     
  }  
}
