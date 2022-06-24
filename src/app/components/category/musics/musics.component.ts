import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { DataService } from '../data.service';
import { Music } from './music';
import { MusicService } from './music.service';

@Component({
  selector: 'app-musics',
  templateUrl: './musics.component.html',
  styleUrls: ['./musics.component.css']
})
export class MusicsComponent implements OnInit {

  category: Category = {} as Category
  data: any
  musics: Music[] = []

  constructor(
    private service: MusicService,
    private dtService: DataService
  ) { }

  ngOnInit(): void {
    this.category = this.dtService.getData()
    this.loadData()
    this.musics.push = this.data.musics
  }

  loadData(){
    this.service.getMusics(this.category.id).subscribe(items => {
      this.data = items
    })
  }

}
