import {BaseTag} from './base-tag';
import {MonitorOverride} from './monitor-override';

export class Device extends BaseTag {
  acceptTags = [MonitorOverride];

  constructor() {
    super('<device>', 'Devices can be added using the <device> element. They must not be nested as this violates the tree structure. Depending on the specified attributes, a single device or multiple devices can be discovered. The devices are added to the Inventory Tree and measurements are created automatically unless specified otherwise.');
  }

  getXML() {
    let xml = '<device';

    /*xml += ' ip="' + this.ip + '"';

    if (this.auto != undefined) {
      xml += ' auto="' + this.auto + '"';
    }

    if (this.discover != undefined) {
      xml += ' discover="' + this.discover + '"';
    }*/

    xml += '>';

    for (let i = 0; i < this.children.length; i++) {
      xml += this.children[i].getXML();
    }

    xml += '</device>';

    return xml;
  }
}
