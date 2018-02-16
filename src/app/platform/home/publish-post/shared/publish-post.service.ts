import { Injectable } from '@angular/core';

@Injectable()
export class PublishPostService {

  constructor() { }

}

//1) create discussion
//2) create post with discussion.createPost (manually set author, Post.authorType = Account.userType, Post.authorId = Account.userId)