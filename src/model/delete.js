import {BaseTag} from './base-tag';

export class Delete extends BaseTag {
  name;
  type;
  template;
  older;
  recursive = false;
  leavesonly = true;
  disabledonly = false;
  simulate = true;

  constructor() {
    super('<delete>', 'This tag is used to delete measurements, monitors or groups from the measurement tree.');
  }

  getXML() {
    let xml = '<delete';
    xml += ' recursive="' + this.recursive + '"';
    xml += ' leavesonly="' + this.leavesonly + '"';
    xml += ' disabledonly="' + this.disabledonly + '"';
    xml += ' simulate="' + this.simulate + '"';
    xml += '/>';
    return xml;
  }
}
