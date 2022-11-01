import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICare } from 'src/app/models/care.model';
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
    duration: 0,
    observations: '',
    parentId: '',
    parentName: '',
    startDate: '',
    care: {},
    parent: {}
  };
  isDataValid: boolean = false;
  repeatCareParent: boolean = false;

  public cancelProcess(): void {
    this.dialogRef.close(null);
  }

  public validateForm(): void {
    if (check.emptyObject(this.careInfo.careTakerId) || check.emptyObject(this.careInfo.parentId) || check.lessOrEqual(this.careInfo.duration, 0) || check.emptyString(this.careInfo.observations) || !check.assigned(this.careInfo.startDate)) {
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

    this.dialogRef.close(this.careInfo);
  }
}

export interface DialogData {}
