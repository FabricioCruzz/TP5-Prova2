import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { MusicsComponent } from './components/category/musics/musics.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'categories' },
  { path: 'categories', component: CategoryComponent },
  { path: 'musics', component: MusicsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
