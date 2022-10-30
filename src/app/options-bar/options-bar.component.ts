import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { NewParentDialog } from '../dialogs/new-parent-dialog/new-parent-dialog';

@Component({
  selector: 'app-options-bar',
  templateUrl: './options-bar.component.html',
  styleUrls: ['./options-bar.component.scss']
})
export class OptionsBarComponent {

constructor() { }

  // openDialog() {
  //   const dialogRef = this.dialog.open(NewParentDialog, {
  //     data: {},
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }

}
