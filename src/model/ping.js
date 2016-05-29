import {BaseTag} from './base-tag';

export class Ping extends BaseTag {
  ipaddress;
  dnsname;
  namefilter;
  descriptionfilter;
  typefilter;
  networkfilter;

  constructor() {
    super('<ping>', 'This tag can be used to create additional Ping measurements.');
  }

  getXML() {
    let xml = '<ping';

    if (this.ipaddress !== undefined) {
      xml += ' ipaddress="' + this.ipaddress + '"';
    }

    if (this.dnsname !== undefined) {
      xml += ' dnsname="' + this.dnsname + '"';
    }

    if (this.namefilter !== undefined) {
      xml += ' namefilter="' + this.namefilter + '"';
    }

    if (this.descriptionfilter !== undefined) {
      xml += ' descriptionfilter="' + this.descriptionfilter + '"';
    }

    if (this.typefilter !== undefined) {
      xml += ' typefilter="' + this.typefilter + '"';
    }

    if (this.networkfilter !== undefined) {
      xml += ' networkfilter="' + this.networkfilter + '"';
    }

    xml += '/>';
    return xml;
  }
}
