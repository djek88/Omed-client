import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable, forkJoin, EMPTY } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { AuthService } from '../../../../login';
import { Post, Discussion, MedCase, MedUserApi, PostApi, DiscussionApi, MedCaseApi, PoolApi } from '../../../../core/sdk';

import { environment } from '../../../../../environments/environment';

@Injectable()
export class PublishPostService {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private medUserApi: MedUserApi,
    private postApi: PostApi,
    private discussionApi: DiscussionApi,
    private medCaseApi: MedCaseApi,
    private poolApi: PoolApi
  ) {}

  publishDiscussion(text: string, incognito: boolean, images: any[]): Observable<Post> {
    let discussion = new Discussion({ text });
    let post = new Post({ incognito });

    return this.discussionApi.create(discussion).pipe(
      switchMap((result) => {
        discussion = result;
        return this.authService.getCurrentMedUser();
      }),
      switchMap((medUser) => {
        post.authorId = medUser.id;
        post.authorType = this.medUserApi.getModelName();
        return this.discussionApi.createPost(discussion.id, post);
      }),
      switchMap((result) => {
        post = result;

        return this.uploadPostImages(post.id, images);
      }),
      switchMap(() => this.postApi.findById<Post>(post.id))
    );
  }

  publishMedCase(medCase: MedCase, incognito: boolean, images: any[]): Observable<Post> {
    let post = new Post({ incognito });

    return this.medCaseApi.create(medCase).pipe(
      switchMap((result) => {
        medCase.id = result.id;
        return this.authService.getCurrentMedUser();
      }),
      switchMap((medUser) => {
        post.authorId = medUser.id;
        post.authorType = this.medUserApi.getModelName();
        return this.medCaseApi.createPost(medCase.id, post);
      }),
      switchMap((result) => {
        post = result;
        return this.uploadPostImages(post.id, images);
      }),
      switchMap(() => this.createMedCasePools(medCase.id, medCase.pools)),
      switchMap(() => this.postApi.findById<Post>(post.id))
    );
  }

  createMedCasePools(medCaseId: string, pools: any[]): Observable<any> {
    const requests = pools.map((pool) => {
      return this.createMedCasePool(medCaseId, pool);
    });

    return requests.length ? forkJoin(requests) : EMPTY;
  }

  createMedCasePool(medCaseId: string, pool: any): Observable<any> {
    return this.medCaseApi.createPools(medCaseId, pool).pipe(
      switchMap((result) => {
        return this.createPoolAnswers(result.id, pool.answers);
      }),
    );
  }

  createPoolAnswers(poolId: string, answers: any[]): Observable<any> {
    const requests = answers.map((answer) => {
      return this.poolApi.createAnswers(poolId, answer);
    });

    return forkJoin(requests);
  }

  uploadPostImages(postId: string, images: any[]): Observable<any> {
    const url = `${environment.apiBaseUrl}/${environment.apiVersion}/Posts/${postId}/upload-image`;
    const headers = new HttpHeaders();
    this.medUserApi.authenticate(url, headers);

    const requests = images.map((image) => {
      const fd = new FormData();
      fd.append('file', image);

      return this.http.post(url, fd, { headers });
    });

    return requests.length ? forkJoin(requests) : EMPTY;
  }
}
