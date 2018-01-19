import { BlogComponent } from './blog.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router/src/router';

export const BlogRoutes: Routes = [
  {
      path: 'blog',
      component: BlogComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(BlogRoutes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class BlogRoutingModule { }
