import {bindable, customElement} from 'aurelia-framework';

import {Device} from '../model/device';
import {User} from '../model/user';
import {MonitorOverride} from '../model/monitor-override';
import {Properties} from '../model/properties';

@customElement('tagbar')
export class TagbarElement {
  @bindable
  help;

  tags;

  constructor() {
    this.tags = [new Device(), new User(), new MonitorOverride(), new Properties()];
  }
}
