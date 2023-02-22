import { Component, Input } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private dataService: DataService
  ){}
  title = 'second_half';

  getUSers1(){
    this.dataService.getUsers1().subscribe({
      next: (response) => {
        console.log(response);
      }
    })
  }
  getUSers2(){
    this.dataService.getUsers2().subscribe({
      next: (response) => {
        console.log(response);
      }
    })
  }
  postUser3(){
    this.dataService.postUser3().subscribe({
      next: (response) => {
        console.log(response);
      }
    })
  }
  getUSers4(){
    this.dataService.getUsers4().subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err: HttpErrorResponse) => {
        console.log('Error number:' + err.status)
      }
    })
  }
  getUSers5(){
    this.dataService.getUsers5().subscribe({
      next: (response) => {
        console.log(response);
      }
    })
  }
}
