import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { JsonApiModule } from 'angular2-jsonapi/dist';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { BlogService } from './blog/blog.service';
import { Datastore } from './blog/datastore/datastore.service';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    JsonApiModule,
    AppRoutingModule
  ],
  providers: [
    BlogService,
    Datastore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
