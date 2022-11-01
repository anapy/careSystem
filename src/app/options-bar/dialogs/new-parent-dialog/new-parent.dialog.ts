import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as check from 'check-types';
import { IParent } from 'src/app/models/parent.model';

@Component({
  selector: 'app-new-parent.dialog',
  templateUrl: './new-parent.dialog.html',
  styleUrls: ['./new-parent.dialog.scss'],
})
export class NewParentDialog {
  constructor(
    public dialogRef: MatDialogRef<NewParentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  parentInfo: IParent = {
    name: '',
  };

  isDataValid: boolean = false;

  public saveParent(): void {
    this.dialogRef.close(this.parentInfo);
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
}

export interface DialogData {}
