import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEventType } from '@angular/common/http';
import { Post } from '../models/post.model';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private readonly httpClient: HttpClient) {  }

  createPost(post: Post) {
    const observable: Observable<any> = this.httpClient.post<{ name: string }>(
      'https://angular-complete-guide-68a76.firebaseio.com/posts.json',
      post,
      {
        observe: 'body'
      }
    );

    return observable;
  }

  getPosts() {
    let params: HttpParams = new HttpParams();

    params = params.append('page', '1');
    params = params.append('offset', '10');

    const observable: Observable<Post[]> = this.httpClient
      .get<{ [key: string]: Post }>(
        'https://angular-complete-guide-68a76.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
          params
          // params: new HttpParams().set('page', '1')
        }
      )
      .pipe(
        map((response) => {
          const posts: Post[] = [];

          for (const key in response) {
            if (response.hasOwnProperty(key)) {
              posts.push({ ...response[key], id: key });
            }
          }

          return posts;
        }),
        catchError((error) => {
          // Send the data to the analytics server
          return throwError(error);
        })
      );
    return observable;
  }

  deletePosts() {
    const observable: Observable<any> =
      this.httpClient.delete('https://angular-complete-guide-68a76.firebaseio.com/posts.json', {
        observe: 'events'
      })
      .pipe(
        tap((event) => {
          switch (event.type) {
            case HttpEventType.Response:
              console.log(event.body);
              break;

            case HttpEventType.Sent:
              console.log(event.type);
              break;

            default:
              console.log(event);
              break;
          }
        })
      );

    return observable;
  }
}
