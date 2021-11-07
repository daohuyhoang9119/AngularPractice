import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css'],
})
export class GetDataComponent implements OnInit {
  constructor(private httpServerService: HttpServerService) {}

  public ngOnInit(): void {
    this.httpServerService.getComments().subscribe((data) => {
      //
      console.log('data', data);
    });
    // this.httpServerService.getRandomUser(5).subscribe((data) => {
    //   //
    //   console.log('user', data.results);
    // });
  }
}
