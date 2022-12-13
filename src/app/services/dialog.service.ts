import { MatConfirmDialogComponent } from './../admin/components/mat-confirm-dialog/mat-confirm-dialog.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private _dialog: MatDialog) {}

  openConfirmDialog(msg:any) {
    return this._dialog.open(MatConfirmDialogComponent, {
      width: '390px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      position: {top: "10px"},
      data: {
        message:msg
      }
    });
  }
}
