import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { forkJoin }   from "rxjs/observable/forkJoin";
import 'rxjs/add/operator/mergeMap';
import "rxjs/add/observable/of";

import { AuthService } from '../../../../login';
import { Post, Discussion,
  MedUserApi, DiscussionApi, PostApi } from '../../../../shared/sdk';

import { environment } from '../../../../../environments/environment';

@Injectable()
export class PublishPostService {

  constructor(
    private http: Http,
    private authService: AuthService,
    private medUserApi: MedUserApi,
    private discussionApi: DiscussionApi,
    private postApi: PostApi
  ) { }

  publishDiscussion(text: string, incognito: boolean, images: any[]): Observable<Post> {
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
      })
      .flatMap((result) => {
        post = result;

        return this.uploadPostImages(post.id, images);
      })
      .flatMap(() => this.postApi.findById(post.id));
  }

  uploadPostImages(postId: string, images: any[]): Observable<any> {
    const url = `${environment.apiBaseUrl}/${environment.apiVersion}/Posts/${postId}/upload-image`;
    const headers = new Headers();
    this.medUserApi.authenticate(url, headers);

    const requests = images.map((image) => {
      const fd = new FormData();
      fd.append('file', image);

      return this.http.post(url, fd, { headers });
    });

    return forkJoin(requests);
  }
}
