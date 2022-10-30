import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-parent-dialog',
  templateUrl: './new-parent-dialog.html',
  styleUrls: ['./new-parent-dialog.scss']
})
export class NewParentDialog {

  constructor(
    public dialogRef: MatDialogRef<NewParentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

export interface DialogData {
}