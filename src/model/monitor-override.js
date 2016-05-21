import {BaseTag} from './base-tag';
import {Monitor} from './monitor';

export class MonitorOverride extends BaseTag {
  acceptTags = [Monitor];

  constructor() {
    super('<monitor-override>', 'Allows to customize monitors to fit the users\' needs.');
  }

  getXML() {
    let xml = '<monitor-override>';

    for (let i = 0; i < this.children.length; i++) {
      xml += this.children[i].getXML();
    }

    xml += '</monitor-override>';

    return xml;
  }
}
