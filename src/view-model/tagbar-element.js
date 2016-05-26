import {bindable, customElement} from 'aurelia-framework';
import {Cleanupgroup} from '../model/cleanupgroup';
import {Device} from '../model/device';
import {MonitorOverride} from '../model/monitor-override';
import {Properties} from '../model/properties';
import {Subgroup} from '../model/subgroup';
import {User} from '../model/user';

@customElement('tagbar')
export class TagbarElement {
  @bindable
  help;

  tags;

  constructor() {
    this.tags = [new Cleanupgroup(), new Device(), new MonitorOverride(),
      new Properties(), new Subgroup(),
      new User()];
  }
}
