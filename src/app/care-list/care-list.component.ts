import { Component, Input } from '@angular/core';
import { ICare } from '../models/care.model';

@Component({
  selector: 'app-care-list',
  templateUrl: './care-list.component.html',
  styleUrls: ['./care-list.component.scss'],
})
export class CareListComponent {
  @Input() careList: Array<ICare>;
  constructor() {}
}
