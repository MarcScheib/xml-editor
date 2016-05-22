import {BaseTag} from './base-tag';

export class Property extends BaseTag {
  key;
  value;

  constructor() {
    super('<property>', 'Specify a specific property by using its key and setting a new value.');
  }

  getXML() {
    return '<property key="' + this.key + '" value="' + this.value + '"/>';
  }
}
