import { Component, Injector, Input, OnInit } from '@angular/core';
import { ICare } from 'src/app/models/care.model';
import { CareService } from 'src/app/services/care.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @Input() careList: Array<ICare>;
  constructor(private injector: Injector) { }

  ngOnInit(): void {
    this.fetchData();
  }

  async fetchData() {
    const careResult = await this.injector.get(CareService).getCares();
    this.careList = _.orderBy(careResult, 'startDate', 'desc');
  }

  refreshCareList() {
    this.fetchData();
  }
}
