import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IParent } from 'src/app/models/parent.model';
import { ICare } from 'src/app/models/care.model';
import * as check from 'check-types';
import * as _ from 'lodash';


@Component({
  selector: 'app-balance.dialog',
  templateUrl: './balance.dialog.html',
  styleUrls: ['./balance.dialog.scss'],
})

export class BalanceDialog implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<BalanceDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  careInfo: Array<ICare> = this.data;
  balanceList = {};
  parentsDebs = {};
  parentsGains = {};

  ngOnInit() {
    const careByParent = _.groupBy(this.careInfo, 'parentName');
    const careByCareTaker = _.groupBy(this.careInfo, 'careTakerName');

    Object.keys(careByParent).map((key) => {
      this.parentsDebs[key] = ""
     this.parentsDebs[key] = _.sumBy(careByParent[key], 'duration');
    });

    Object.keys(careByCareTaker).map((key) => {
      this.parentsGains[key] = ""
     this.parentsGains[key] = _.sumBy(careByCareTaker[key], 'duration');
    });
    this.getBalance();
  }

  getBalance() {
    this.balanceList = { ...this.parentsGains };
    Object.keys(this.parentsDebs).forEach((key) => {
      if (check.assigned(this.balanceList[key])) {
        this.balanceList[key] = this.parentsGains[key] - this.parentsDebs[key];
      } else {
        this.balanceList[key] = "";
        this.balanceList[key] = (this.parentsDebs[key] * - 1);
      }
    });
  }

  saveCare() {
    this.dialogRef.close(this.careInfo);
  }

  transformMinute(value: number): string {
    let hours = Math.floor(value / 60);
    let minutes = Math.abs(Math.floor(value % 60));
    return hours + ' hrs ' + minutes + ' mins';
  }
}

export interface DialogData {}
