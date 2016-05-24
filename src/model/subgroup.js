import {BaseTag} from './base-tag';
import {Device} from './device';
import {Properties} from './properties';
import {User} from './user';

export class Subgroup extends BaseTag {
  acceptTags = [Device, Properties, User];

  name;

  constructor() {
    super('<subgroup>', 'Subgroups allow you to structure your Measurement and Inventory tree.');
  }

  getXML() {
    let xml = '<subgroup name="'+ this.name + '">';

    for (let i = 0; i < this.children.length; i++) {
      xml += this.children[i].getXML();
    }

    xml += '</subgroup>';

    return xml;
  }
}
