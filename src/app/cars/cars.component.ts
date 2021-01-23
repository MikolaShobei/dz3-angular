import {Component, Input, OnInit} from '@angular/core';
import { cars } from 'src/data-base';
import {ICar} from '../interfaces';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  id = null;
  cars: ICar[] = cars;
  constructor() { }
  getId(iid: number): void{
    this.id = iid;
  }
  ngOnInit(): void {
  }

}
