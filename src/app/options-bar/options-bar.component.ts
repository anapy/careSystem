import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IParent } from 'src/app/models/parent.model';
import { ParentService } from 'src/app/services/parent.service';
import { NewCareDialog } from './dialogs/new-care-dialog/new-care.dialog';
import { NewParentDialog } from './dialogs/new-parent-dialog/new-parent.dialog';
import { BalanceDialog } from 'src/app/options-bar/dialogs/balance-dialog/balance.dialog';
import { CareService } from 'src/app/services/care.service';
import { ICare } from 'src/app/models/care.model';
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
    private careService: CareService,
    private snackBar: MatSnackBar
  ) {}

  @Output() createNewCare: EventEmitter<void> = new EventEmitter<void>();
  @Input() careList: Array<ICare>;
  parentsList: Array<IParent>;

  ngOnInit(): void {
    this.fetchData();
  }

  async fetchData() {
    this.parentsList = await this.parentService.getParents();
  }
  openNewParentDialog() {
    const dialogRef = this.dialog.open(NewParentDialog, {
      data: {},
    });

    dialogRef.afterClosed().subscribe((parentInfo) => {
      if (check.assigned(parentInfo)) {
        this.createParent(parentInfo);
      }
    });
  }

  async createParent(parentInfo: IParent) {
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

    dialogRef.afterClosed().subscribe((careInfo) => {
      if (check.assigned(careInfo) && !check.emptyObject(careInfo)) {
        this.createCare(careInfo);
      }
    });
  }

  showBalance() {
    this.dialog.open(BalanceDialog, {
      data: this.careList
    });
  }

  async createCare(careInfo: ICare) {
    try {
      await this.careService.createCare(careInfo);
      this.openSnackBar('Creado correctamente', 'Close');
      this.fetchData();
      this.createNewCare.emit();

    } catch {
      this.openSnackBar('Error en la creación', 'Close');
    }
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
