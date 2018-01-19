import { Http } from '@angular/http';
import { JsonApiDatastoreConfig, JsonApiDatastore, DatastoreConfig } from 'angular2-jsonapi';
import { Post } from '../models/post';
import { Comment } from '../models/comment';
import { Injectable } from '@angular/core';

const config: DatastoreConfig = {
  models: {
    posts: Post,
    comments: Comment
  }
};

@Injectable()
@JsonApiDatastoreConfig(config)
export class Datastore extends JsonApiDatastore {

    constructor(http: Http) {
        super(http);
    }

}
