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

  public getCounter(): number {
    return this.counter;
  }
  public setCounter(n: number): void {
    this.counter = n;
  }

  public submitData(user: any): void {
    console.log('Gui data len server: ', user);
  }
}
