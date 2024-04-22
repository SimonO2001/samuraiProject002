import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenericService<Gulerodentity> {
  urlNew: string = environment.apiUrl + 'Samurai';
  constructor(private http: HttpClient) {

   }

    getAll(): Observable<Gulerodentity[]>{
    return this.http.get<Gulerodentity[]>(this.urlNew);
  }

    delete(name:string, entityToDelete:number): boolean{

      this.http.delete("http://localhost:72221/api/"+name+"/"+entityToDelete);
      return true;
    }
  
}
