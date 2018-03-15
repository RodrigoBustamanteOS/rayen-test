import { inject } from 'aurelia-framework';
import { HttpClient, json } from 'aurelia-fetch-client';
@inject(HttpClient)
export class Welcome {
  constructor(HttpClient) {
    this.httpClient = HttpClient;
    this.url = "http://jsonplaceholder.typicode.com/posts";
    this.aux = false;
    this.posts = [];
  }
  getApi() {
    this.httpClient.fetch(this.url)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          this.posts = data;
          this.aux = true;
        }
      });
  }
}
