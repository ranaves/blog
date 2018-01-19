import { Comment } from './models/comment';
import { Post } from './models/post';
import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { JsonApiQueryData } from 'angular2-jsonapi';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Post[] = [];

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.blogService.getPosts()
    .subscribe((posts: JsonApiQueryData<Post>) => {
        this.posts = posts.getModels();
     },
     err => {
       console.log(err);
     });
  }
}
