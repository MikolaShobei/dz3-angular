import {Component, Input, OnInit, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
import {ICar} from '../../interfaces';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input()
  car: ICar;
  @Output()
  liftIdUp = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onHandleClick(id: number): void {
    this.liftIdUp.emit(id);
  }
}
