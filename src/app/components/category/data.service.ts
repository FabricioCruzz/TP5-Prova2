import { Injectable } from '@angular/core';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  category: Category = {} as Category

  constructor() { }

  setData(category: Category){
    this.category = category
  }

  getData(){
    return this.category
  }
}
