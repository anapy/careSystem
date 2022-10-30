import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CareCardComponent } from './care-card/care-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { CareListComponent } from './care-list/care-list.component';
import { OptionsBarComponent } from './options-bar/options-bar.component';
import { NewParentDialog } from './dialogs/new-parent-dialog/new-parent-dialog';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    CareCardComponent,
    CareListComponent,
    OptionsBarComponent,
    NewParentDialog,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },

    { provide: MAT_DIALOG_DATA, useValue: {} },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
