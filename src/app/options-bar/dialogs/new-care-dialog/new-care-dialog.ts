import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICare } from 'src/app/models/care.model';
import * as check from 'check-types';

@Component({
  selector: 'app-new-care-dialog',
  templateUrl: './new-care-dialog.html',
  styleUrls: ['./new-care-dialog.scss'],
})
export class NewCareDialog {
  constructor(
    public dialogRef: MatDialogRef<NewCareDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  careInfo: ICare = {
    careTakerId: '',
    careTakerName: '',
    duration: 0,
    observations: '',
    parentId: '',
    parentName: '',
    startDate: '',
  };
  isDataValid: boolean = false;

  onNoClick(): void {
    this.dialogRef.close();
  }

  public cancelProcess(): void {
    this.dialogRef.close(null);
  }

  public validateValue(newValue): void {
    if (check.assigned(newValue) && check.not.emptyString(newValue)) {
      this.isDataValid = true;
      return;
    }
    this.isDataValid = false;
  }

  saveCare() {
    console.log('guardando');
  }
}

export interface DialogData {}
