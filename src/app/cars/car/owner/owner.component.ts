import {Component, Input, OnInit} from '@angular/core';
import {ICar} from '../../../interfaces';
// import {ActivatedRoute} from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {
  id: number;
  constructor(private activatedRoute: ActivatedRoute) {
  }
  name: any;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => this.id = value.id);
  }

}
