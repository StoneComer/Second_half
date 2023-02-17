import { Component, VERSION } from '@angular/core';
import { filter, interval, Subscription } from 'rxjs';
import { pipe, map } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'second_half';
  constructor() {}

  intervalSubs$: Subscription = new Subscription;
  intervalSubsRand$: Subscription = new Subscription;
  enableStopButton = false;
  array:number [] = [];
  arrayRand:string [] = [];

  getCounter() {
    const intervalStream$ = interval(2000);
    this.enableStopButton = true;
    this.intervalSubs$ = intervalStream$.subscribe((value) => {
      this.array.push(value);
    });
    this.intervalSubsRand$ = intervalStream$.pipe(
      map(value  => `Random Value: ${Math.floor(getRandomArbitrary(0,1000))}`))
    .subscribe((value) => {
      this.arrayRand.push(value);
    });
  }

  stopSubs() {
    this.intervalSubs$.unsubscribe();
  }
  
  stopSubsRand() {
    this.intervalSubsRand$.unsubscribe();
  }
}

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}