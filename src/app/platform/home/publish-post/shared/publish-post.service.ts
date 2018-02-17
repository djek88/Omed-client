import { Injectable }    from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';

import { AuthService }        from '../../../../login';
import { Post, Discussion,
  MedUserApi, DiscussionApi } from '../../../../shared/sdk';

@Injectable()
export class PublishPostService {

  constructor(
    private authService: AuthService,
    private medUserApi: MedUserApi,
    private discussionApi: DiscussionApi
  ) { }

  publishDiscussion(text: string, incognito: boolean): Observable<Post> {
    let discussion = new Discussion({ text });
    let post = new Post({ incognito });

    return this.discussionApi.create(discussion)
      .flatMap((result) => {
        discussion = result;
        return this.authService.getCurrentMedUser();
      })
      .flatMap((medUser) => {
        post.authorId = medUser.id;
        post.authorType = this.medUserApi.getModelName();
        return this.discussionApi.createPost(discussion.id, post);
      });
  }
}
