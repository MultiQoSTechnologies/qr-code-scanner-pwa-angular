import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-info-dialog',
  templateUrl: './app-info-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppInfoDialogComponent {

  hasDevices: any;
  hasPermission: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) readonly data: any,
  ) {
    this.hasDevices = data.hasDevices;
    this.hasPermission = data.hasPermission;
  }

}
