import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as check from 'check-types';
import { ICare } from 'src/app/models/care.model';
import { IParent } from 'src/app/models/parent.model';

@Component({
  selector: 'app-new-care.dialog',
  templateUrl: './new-care.dialog.html',
  styleUrls: ['./new-care.dialog.scss'],
})

export class BalanceDialog {
  constructor(
    public dialogRef: MatDialogRef<BalanceDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  parentsList: Array<IParent> = this.data;

  careInfo: Array<ICare>;
  isDataValid: boolean = false;
  repeatCareParent: boolean = false;

  onNoClick(): void {
    this.dialogRef.close();
  }

  public cancelProcess(): void {
    console.log('Cancelado estoy');
    this.dialogRef.close(null);
  }

  saveCare() {
    this.dialogRef.close(this.careInfo);
  }
}

export interface DialogData {}
