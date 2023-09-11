import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  firebase_url: string =
    'https://ng-complete-guide-a2859-default-rtdb.firebaseio.com/';

  // doesn't care about the response/ response status
  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    this.http
      .post<{ [key: string]: Post }>(this.firebase_url + 'posts.json', postData)
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  fetchPosts() {
    // returns an observable to subscribe to in component file
    // doe care about the response/ response status so subscription is done outside of file
    return this.http
      .get<{ [key: string]: Post }>(this.firebase_url + 'posts.json')
      .pipe(
        map((resData) =>
          Object.entries(resData).map(([id, post]) => ({ ...post, id }))
        )
      );
    // going to use subjects here.
    // since this will be a subject no need to subscribe here
    // the "subscription/ listening will be done in -> app.component.ts"
    // .subscribe((requestData) => {
    //   // console.log(requestData);
    // });
  }

  deleteAllPosts() {
    const deleteUrl = `${this.firebase_url}posts.json`;

    return this.http.delete(deleteUrl);
  }

  constructor(private http: HttpClient) {}
}
