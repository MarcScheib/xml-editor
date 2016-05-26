import {BaseTag} from './base-tag';

export class Cleanupgroup extends BaseTag {
  simulate = true;
  inventory = true;
  measurement = true;

  constructor() {
    super('<cleanupgroup>', 'This tag can be used to remove empty groups from the Measurement or Inventory tree.');
  }

  getXML() {
    return '<cleanupgroup simulate="' + this.simulate + '" inventory="' + this.inventory + '" measurement="' + this.measurement + '"/>';
  }
}
