import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts.component';
import { StoreModule } from '@ngrx/store';
import { postReducer } from './post-store/reducer/post.reducer';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('posts', postReducer),
  ],
})
export class PostsModule {}
