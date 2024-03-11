import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Post } from './post.model';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class PostsService {
    constructor(private http: HttpClient){}

    createAndStorePost(title: string, content:string) {
        const postData: Post = {title, content};
        this.http.post(
        "https://ng-complete-guide-10979-default-rtdb.europe-west1.firebasedatabase.app/posts.json", 
        postData
        ).subscribe(res => {
            console.log(res);
        })
    }

    fetchPosts = () => {
        return this.http.get("https://ng-complete-guide-10979-default-rtdb.europe-west1.firebasedatabase.app/posts.json")
        .pipe(map((responseData: {[key: string]: Post}) => {
        const postsArray: Post[] = [];

        for(const key  in responseData) {
            if(responseData.hasOwnProperty(key)){
            postsArray.push({...responseData[key], id: key});
            }
        }

        return postsArray;
        }))
        // .subscribe((posts: []) => {
        // // this.loadedPosts = posts
        // // console.log(this.loadedPosts);
        // // this.isFetching = false;
        //     return posts;
        // }); 
    }

    deletePosts = () => {
        return this.http.delete("https://ng-complete-guide-10979-default-rtdb.europe-west1.firebasedatabase.app/posts.json")
    }
}