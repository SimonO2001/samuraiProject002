import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clan } from '../models/Clan';

@Injectable({
  providedIn: 'root'
})
export class ClanService {

  url:string ="https://localhost:7221/api/Clan";
  constructor(private http: HttpClient) { }

  getAll(): Observable<Clan[]>{
    return this.http.get<Clan[]>(this.url);
  }
}
