import { Component, Input, OnInit } from '@angular/core';
import { ICare } from '../models/care.model';

@Component({
  selector: 'app-care-card',
  templateUrl: './care-card.component.html',
  styleUrls: ['./care-card.component.scss']
})
export class CareCardComponent implements OnInit {
  @Input() care: ICare = {
    parent: 'Maria',
    carer: 'Lucía',
    date: new Date(),
    term: 30,
    description: 'Free night'
  }

  constructor() { }


  ngOnInit(): void {

  }

}


