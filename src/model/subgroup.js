import {BaseTag} from './base-tag';
import {Delete} from './delete';
import {Device} from './device';
import {Ping} from './ping';
import {Properties} from './properties';
import {User} from './user';

export class Subgroup extends BaseTag {
  acceptTags = [Delete, Device, Ping, Properties, User];

  name;

  constructor() {
    super('<subgroup>', 'Subgroups allow you to structure your Measurement and Inventory tree.');
  }

  getXML() {
    let xml = '<subgroup name="' + this.name + '">';

    for (let i = 0; i < this.children.length; i++) {
      xml += this.children[i].getXML();
    }

    xml += '</subgroup>';

    return xml;
  }
}
