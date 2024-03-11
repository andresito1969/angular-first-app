import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.http.post(
      "https://ng-complete-guide-10979-default-rtdb.europe-west1.firebasedatabase.app/posts.json", 
      postData
      ).subscribe(res => {
        console.log(res);
      })
    console.log(postData);
  }

  onFetchPosts() {
    // Send Http request
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.http.get("https://ng-complete-guide-10979-default-rtdb.europe-west1.firebasedatabase.app/posts.json")
    .pipe(map((responseData: {[key: string]: Post}) => {
      const postsArray: Post[] = [];

      for(const key  in responseData) {
        if(responseData.hasOwnProperty(key)){
          postsArray.push({...responseData[key], id: key});
        }
      }

      return postsArray;
    }))
    .subscribe((posts: []) => {
      this.loadedPosts = posts
      console.log(this.loadedPosts);
    }); 
  }
}
