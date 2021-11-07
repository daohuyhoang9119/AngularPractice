import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css'],
})
export class PostDataComponent implements OnInit {
  constructor(private httpServerService: HttpServerService) {}

  ngOnInit(): void {
    const payload = {
      body: 'this is a message from user',
      postId: 4,
    };
    this.httpServerService.postComment(payload).subscribe((data) => {
      console.log('postdata', data);
    });
  }
}
