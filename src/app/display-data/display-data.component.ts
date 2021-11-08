import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css'],
})
export class DisplayDataComponent implements OnInit {
  constructor(private httpServerService: HttpServerService) {}
  public posts: any = [];
  ngOnInit(): void {
    this.httpServerService.getPosts().subscribe((data) => {
      //
      console.log('data', data);
      let user = { ...data };
      this.posts = data;
    });
  }

  public addPost() {
    const postExample = {
      id: Math.floor(Math.random() * 100),
      title: 'book 1',
      author: 'CR7',
    };
    this.httpServerService.addPost(postExample).subscribe((data) => {
      console.log('postdata', data);
      this.posts.push(postExample);
    });
  }
  public deletePost(id: any) {
    console.log('id:', id);
    const removeIndex = this.posts.map((post: any) => post.id).indexOf(id);
    // console.log('removeIndex:', removeIndex);
    if (removeIndex > -1) {
      this.posts.splice(removeIndex, 1);
    }
  }
}
