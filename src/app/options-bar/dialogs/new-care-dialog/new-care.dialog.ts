import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as check from 'check-types';
import { IParent } from 'src/app/models/parent.model';

@Component({
  selector: 'app-new-care.dialog',
  templateUrl: './new-care.dialog.html',
  styleUrls: ['./new-care.dialog.scss'],
})

export class NewCareDialog {
  constructor(
    public dialogRef: MatDialogRef<NewCareDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  parentsList: Array<IParent> = this.data;
  careInfo: any = {
    careTakerId: '',
    careTakerName: '',
    duration: null,
    observations: '',
    parentId: '',
    parentName: '',
    startDate: '',
    care: {},
    parent: {},
    time: ''
  };
  isDataValid: boolean = false;
  repeatCareParent: boolean = false;

  public cancelProcess(): void {
    this.dialogRef.close(null);
  }

  public validateForm(): void {
    if (check.emptyObject(this.careInfo.careTakerId) || check.emptyObject(this.careInfo.parentId) || !check.assigned(this.careInfo.duration && check.lessOrEqual(this.careInfo.duration, 0)) || check.emptyString(this.careInfo.observations) || !check.assigned(this.careInfo.startDate) || check.emptyString(this.careInfo.time)) {
      this.isDataValid = false;
    } else if (this.careInfo.care.id === this.careInfo.parent.id) {
      this.isDataValid = false;
      this.repeatCareParent = true;
    } else {
      this.isDataValid = true;
    }

  }

  saveCare() {
    //First modify the object to meet the ICare model
    this.careInfo.parentId = this.careInfo.parent.id;
    this.careInfo.parentName = this.careInfo.parent.name;
    delete this.careInfo.parent;
    this.careInfo.careTakerId = this.careInfo.care.id;
    this.careInfo.careTakerName = this.careInfo.care.name;
    delete this.careInfo.care;

    //Second save the time together with date
    const matches = this.careInfo.time.toLowerCase().match(/(\d{1,2}):(\d{2}) ([ap]m)/);
    const hours = (parseInt(matches[1]) + (matches[3] == 'pm' ? 12 : 0));
    const minutes = matches[2]
    this.careInfo.startDate.setHours(hours, minutes);
    delete this.careInfo.time;
    this.dialogRef.close(this.careInfo);
  }
}

export interface DialogData {}
