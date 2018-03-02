import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { forkJoin }   from "rxjs/observable/forkJoin";
import 'rxjs/add/operator/mergeMap';
import "rxjs/add/observable/of";

import { AuthService } from '../../../../login';
import { Post, Discussion, MedCase, Pool,
  MedUserApi, PostApi, DiscussionApi, MedCaseApi, PoolApi } from '../../../../shared/sdk';

import { environment } from '../../../../../environments/environment';

@Injectable()
export class PublishPostService {

  constructor(
    private http: Http,
    private authService: AuthService,
    private medUserApi: MedUserApi,
    private postApi: PostApi,
    private discussionApi: DiscussionApi,
    private medCaseApi: MedCaseApi,
    private poolApi: PoolApi
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

  publishMedCase(medCase: MedCase, incognito: boolean, images: any[]): Observable<Post> {
    let post = new Post({ incognito });

    return this.medCaseApi.create(medCase)
      .flatMap((result) => {
        medCase.id = result.id;
        return this.authService.getCurrentMedUser();
      })
      .flatMap((medUser) => {
        post.authorId = medUser.id;
        post.authorType = this.medUserApi.getModelName();
        return this.medCaseApi.createPost(medCase.id, post);
      })
      .flatMap((result) => {
        post = result;
        return this.uploadPostImages(post.id, images);
      })
      .flatMap(() => this.createMedCasePools(medCase.id, medCase.pools))
      .flatMap(() => this.postApi.findById(post.id));
  }

  createMedCasePools(medCaseId: string, pools: any[]): Observable<any> {
    const requests = pools.map((pool) => {
      return this.createMedCasePool(medCaseId, pool);
    });

    return requests.length ? forkJoin(requests) : Observable.of(null);
  }

  createMedCasePool(medCaseId: string, pool: any): Observable<any> {
    return this.medCaseApi.createPools(medCaseId, pool)
      .flatMap((result) => {
        return this.createPoolAnswers(result.id, pool.answers);
      });
  }

  createPoolAnswers(poolId: string, answers: any[]): Observable<any> {
    const requests = answers.map((answer) => {
      return this.poolApi.createAnswers(poolId, answer);
    });

    return forkJoin(requests);
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

    return requests.length ? forkJoin(requests) : Observable.of(null);
  }
}
