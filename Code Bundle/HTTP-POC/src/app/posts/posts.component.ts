import { Component, OnInit, ViewChild } from '@angular/core';

import { Post } from '../_shared/models/post.model';
import { PostService } from '../_shared/services/post.service';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @ViewChild('sendPostForm', { static: true }) sendPostForm: NgForm;
  loadedPosts: Post[] = [];
  isFetching = false;
  error: string = null;

  constructor(private readonly postService: PostService) { }

  ngOnInit(): void {
    this.fetchPosts();
  }

  onSendPost(post: Post): void {
    const observable: Observable<{ name: string }> = this.postService.createPost(post);

    observable.subscribe(
      (response) => {
        console.log(response);
        this.sendPostForm.reset();
        this.fetchPosts();
      },
      (error: Error) => {
        this.error = error.message;
      }
    );
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onDeletePosts() {
    const observable: Observable<any> = this.postService.deletePosts();
    this.isFetching = true;

    observable.subscribe(
      (response) => {
        this.isFetching = false;
        this.loadedPosts.splice(0, this.loadedPosts.length);
      },
      (error: Error) => {
        this.error = error.message;
      }
    );
  }

  private fetchPosts() {
    this.isFetching = true;
    const observable: Observable<Post[]> = this.postService.getPosts();

    observable.subscribe(
      (posts: Post[]) => {
        this.isFetching = false;
        this.loadedPosts = posts;
      },
      (error: Error) => {
        this.error = error.message;
      }
    );
  }

}
