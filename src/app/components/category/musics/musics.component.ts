import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  musics: Music[] = []
  newMusic: Music = {} as Music

  constructor(
    private service: MusicService,
    private dtService: DataService
  ) { }

  ngOnInit(): void {
    this.category = this.dtService.getData()
    this.loadData()
  }

  loadData(){
    this.service.getMusics(this.category.id).subscribe(items => {
      this.musics = items
    })
  }

  saveData(form: NgForm){
    this.service.createMusic(this.newMusic).subscribe(item => {
      form.resetForm()
      this.newMusic = {} as Music
      this.loadData()
    })
  }

}
