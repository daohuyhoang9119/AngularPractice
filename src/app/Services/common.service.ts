import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}
  public counter = 0;

  public binhPhuong(n: number): number {
    return n * n;
  }
}
