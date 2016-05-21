import {BaseTag} from './base-tag';

export class Monitor extends BaseTag {
  filtertype = '';
  inverted;

  constructor() {
    super('<monitor>', 'Using the <monitor> sub element, a set of monitors matching given filters can be overridden.');
  }

  getXML() {
    let xml = '<monitor';

    xml += ' filtertype="' + this.filtertype + '"';

    if (this.inverted != undefined) {
      xml += ' inverted="' + this.inverted + '"';
    }

    xml += ' />';

    return xml;
  }
}
