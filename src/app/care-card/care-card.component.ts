import { Component, Input, OnInit } from '@angular/core';
import { ICare } from '../models/care.model';

@Component({
  selector: 'app-care-card',
  templateUrl: './care-card.component.html',
  styleUrls: ['./care-card.component.scss'],
})
export class CareCardComponent {
  @Input() care: ICare;

  constructor() {}

  transformMinute(value: number): string {
    let hours = Math.floor(value / 60);
    let minutes = Math.abs(Math.floor(value % 60));
    return hours + ' hrs ' + minutes + ' mins';
  }
}
