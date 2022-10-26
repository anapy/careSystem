import { Component, Input, OnInit } from '@angular/core';
import { CareCardComponent } from '../care-card/care-card.component';
import { ICare } from '../models/care.model';


@Component({
  selector: 'app-care-list',
  templateUrl: './care-list.component.html',
  styleUrls: ['./care-list.component.scss']
})
export class CareListComponent implements OnInit {

  @Input() careList: Array<ICare> = [
    {
      parent: 'Maria',
      carer: 'Lucía',
      date: new Date(),
      term: 30,
      description: 'Free night'
    },
    {
      parent: 'Pepe',
      carer: 'María',
      date: new Date(),
      term: 23,
      description: 'Broken leg'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
