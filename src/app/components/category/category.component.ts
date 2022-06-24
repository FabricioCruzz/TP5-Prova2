import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from './category';
import { CategoryService } from './category.service';
import { DataService } from './data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  newCategory: Category = {} as Category
  categories: Category[] = []

  constructor(
    private service: CategoryService,
    private dtService: DataService
    ) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.service.getCategories().subscribe(items => {
      this.categories = items
    })
  }

  saveData(form: NgForm){
    this.service.createCategory(this.newCategory).subscribe(item => {
      form.resetForm()
      this.newCategory = {} as Category
      this.loadData()
    })
  }

  toMusics(category: Category){
    this.dtService.setData(category)
  }
}
