import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string = 'Márcio';
  age: number = 31;
  job: string = 'Programador'

  constructor() { }

  ngOnInit(): void {
  }

}
