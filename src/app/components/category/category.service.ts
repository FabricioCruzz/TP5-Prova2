import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private urlAPI = 'https://music-api-2022.herokuapp.com/categories'

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.urlAPI)
  }

  createCategory(category: Category): Observable<Category>{
    return this.http.post<Category>(this.urlAPI, category)
  }

}
