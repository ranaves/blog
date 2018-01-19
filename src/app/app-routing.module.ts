import { BlogComponent } from './blog/blog.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutes } from './blog/blog-routing.module';

const appRoutes: Routes = [
  { path: 'blog', redirectTo: 'blog', pathMatch: 'full' },
  ...BlogRoutes,
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ]
})
export class AppRoutingModule { }
