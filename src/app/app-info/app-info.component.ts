import { Component, Input, VERSION, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './app-info.component.html',
  styleUrls: ['./app-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppInfoComponent {

  ngVersion = VERSION.full;

  @Input()
  hasDevices: any;

  @Input()
  hasPermission: any;

  stateToEmoji(state: any): any {

    const states = {
      // not checked
      undefined: '❔',
      // failed to check
      null: '⭕',
      // success
      true: '✔',
      // can't touch that
      false: '❌'
    };


    return 'true';
    /*const foundKey = Object.keys(states).find(key => key === state);
    return states['' + foundKey];*/

  }
}
