import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers1(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
  getUsers2(){
    let queryParams = new HttpParams().append("postId",1);
    return this.http.get('https://jsonplaceholder.typicode.com/comments', {params: queryParams})
  }
  postUser3(){
    return this.http.post('https://jsonplaceholder.typicode.com/posts', {})
  }
  getUsers4(){
    return this.http.get('https://jsonplaceholder.typicode.com/post')
  }
  getUsers5(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts', {headers: {'Authorization': 'some-token'}, responseType: 'text'})
  }
}