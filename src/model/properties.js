import {BaseTag} from './base-tag';
import {Property} from './property';

export class Properties extends BaseTag {
  acceptTags = [Property];

  constructor() {
    super('<properties>', 'Properties are used to influence how devices are discovered, what data is read and saved, which measurements and monitors are created.');
    this.property = new Property();
  }

  getXML() {
    let xml = '<properties>';
    for (let i = 0; i < this.children.length; i++) {
      xml += this.children[i].getXML();
    }
    xml += '</properties>';

    return xml;
  }
}
