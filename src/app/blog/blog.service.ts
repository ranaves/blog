import { Datastore } from './datastore/datastore.service';
import { Injectable } from '@angular/core';
import { Post } from './models/post';
import { Comment } from './models/comment';

@Injectable()
export class BlogService {

  private headers: Headers = new Headers({'Content-Type': 'application/json'});

  constructor(
    private datastore: Datastore
  ) { }

  getPosts() {
    return this.datastore.findAll(Post, this.headers);
  }

  getComments() {
    return this.datastore.findAll(Comment, this.headers);
  }

}
