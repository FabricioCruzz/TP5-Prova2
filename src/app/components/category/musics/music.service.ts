import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Music } from './music';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  
  private urlAPI = 'https://music-api-2022.herokuapp.com/categories'

  constructor(private http: HttpClient) { }

  getMusics(categoryID: number): Observable<Music[]>{
    console.log('Here ' + categoryID)
    return this.http.get<Music[]>(this.urlAPI + `/${categoryID}`)
  }

  createMusic(category: Music): Observable<Music>{
    return this.http.post<Music>(this.urlAPI, category)
  }
}
