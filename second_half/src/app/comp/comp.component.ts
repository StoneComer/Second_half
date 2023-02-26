import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {

  constructor(private dataService: DataService) { }

  textres = '';

  getUsers7(){
    this.dataService.resUsers1().subscribe((response)=>{
      this.textres = response;
    })
  }

  ngOnInit(): void {
    this.getUsers7();
  }

}