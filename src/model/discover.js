import {BaseTag} from './base-tag';
import {Cleanupgroup} from './cleanupgroup';
import {Delete} from './delete';
import {Device} from './device';
import {Ping} from './ping';
import {Properties} from './properties';
import {Subgroup} from './subgroup';
import {User} from './user';

export class Discover extends BaseTag {
  acceptTags = [Cleanupgroup, Delete, Device, Properties, Ping, Subgroup, User];

  constructor() {
    super('<discover>', '');
  }

  getXML() {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>';
    xml += '<discover xmlns="http://www.infosim.net/autoconf/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n';
    xml += '    xsi:schemaLocation="http://www.infosim.net/autoconf/ http://xml.infosim.net/schema/autoconf.xsd" version="1">';

    for (let i = 0; i < this.children.length; i++) {
      xml += this.children[i].getXML();
    }

    xml += '</discover>';

    return xml;
  }
}
