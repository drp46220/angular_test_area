import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription, map } from 'rxjs';

import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching: boolean = false;
  isError = null;
  firebase_url: string =
    'https://ng-complete-guide-a2859-default-rtdb.firebaseio.com/';
  private errorSub: Subscription;

  constructor(private http: HttpClient, private postService: PostsService) {}

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }

  ngOnInit() {
    this.postServiceSubscribe();
    this.errorSub = this.postService.error.subscribe((errorMessage) => {
      this.isError = errorMessage;
    });
  }

  // send and store json object to FireBase
  // 'posts.json' is the file directory
  // -----------------------------------------------------------------------
  onCreatePost(postData: Post) {
    // Send Http request
    this.postService.createAndStorePost(postData.title, postData.content);
    console.log(postData);
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postServiceSubscribe();
  }

  // subscribes to the observable in the postService file
  // encapsulated method to reduce duplication
  private postServiceSubscribe() {
    this.postService.fetchPosts().subscribe(
      (posts) => {
        this.isFetching = false;
        this.loadedPosts = posts;
      },
      (error) => {
        this.isError = error.message;
      }
    );
  }

  onClearPosts() {
    // Send Http request
    this.postService.deleteAllPosts().subscribe(
      () => {
        this.loadedPosts = [];
        console.log('All posts deleted successfully.');
      },
      (error) => {
        console.error('Error deleting all posts:', error);
      }
    );
  }

  handleError() {
    this.isError = null;
  }

  // get the json data from FireBase
  // automatically store created id in the posted object as a array
  // subscribe and log to console
  // only knows this is an object but not what the object looks like
  // MOVED INTO -> posts.service.ts
  // -----------------------------------------------------------------------
  // private fetchPosts() {
  //   this.http
  //     .get(this.firebase_url + 'posts.json')
  //     .pipe(
  //       map((responseData) => {
  //         const postsArray: Post[] = [];
  //         for (const key in responseData) {
  //           if (responseData.hasOwnProperty(key)) {
  //             postsArray.push({ ...responseData[key], id: key });
  //           }
  //         }
  //         return postsArray;
  //       })
  //     )
  //     .subscribe((requestData) => {
  //       console.log(requestData);
  //       this.loadedPosts = requestData;
  //     });
  // }
}
