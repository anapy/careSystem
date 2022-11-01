import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IParent } from 'src/app/models/parent.model';
import { ParentService } from 'src/app/services/parent.service';
import { NewCareDialog } from './dialogs/new-care-dialog/new-care-dialog';
import { NewParentDialog } from './dialogs/new-parent-dialog/new-parent-dialog';
import * as check from 'check-types';

@Component({
  selector: 'app-options-bar',
  templateUrl: './options-bar.component.html',
  styleUrls: ['./options-bar.component.scss'],
})
export class OptionsBarComponent {
  constructor(
    public dialog: MatDialog,
    private parentService: ParentService,
    private snackBar: MatSnackBar
  ) {}

  parentsList: Array<IParent>;

  ngOnInit(): void {
    this.fetchData();
  }

  async fetchData() {
    this.parentsList = await this.parentService.getParents();
    console.log(this.parentsList);
  }
  openNewParentDialog() {
    const dialogRef = this.dialog.open(NewParentDialog, {
      data: {},
    });

    dialogRef.afterClosed().subscribe((parentInfo) => {
      if (check.assigned(parentInfo) && check.not.emptyString(parentInfo)) {
        this.createParent(parentInfo);
      }
    });
  }

  async createParent(parentInfo) {
    try {
      await this.parentService.createParent(parentInfo);
      this.openSnackBar('Creado correctamente', 'Close');
      this.fetchData();
    } catch {
      this.openSnackBar('Error en la creación', 'Close');
    }
  }

  openNewCareDialog() {
    const dialogRef = this.dialog.open(NewCareDialog, {
      data: this.parentsList,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  //open a snackBar on top with the message given
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['mat-primary', 'mat-accent'],
    });
  }
}
