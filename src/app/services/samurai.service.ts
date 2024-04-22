import { Injectable } from '@angular/core';
import { Samurai } from '../models/Samurai';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SamuraiService {


  urlNew: string = environment.apiUrl + 'Samurai';
  url:string ="https://localhost:7221/api/Samurai";
  constructor(private http: HttpClient) { }

  getAll(): Observable<Samurai[]>{
    return this.http.get<Samurai[]>(this.url);
  }

  // getAll(): Samurai[]{
  //   return [
  //     {Id: 1, Name:"Simon", Description:"Ginger",Age:25},
  //     {Id: 2, Name:"Lucas", Description:"Blond",Age:21},
  //     {Id: 3, Name:"Kristine", Description:"Blond",Age:23},
  //     {Id: 4, Name:"Selin", Description:"Mørk",Age:28},
  //   ];
  // }


}
