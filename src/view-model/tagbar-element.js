import {customElement} from 'aurelia-framework';

import {Device} from '../model/device';

@customElement('tagbar')
export class TagbarElement {
  tags;

  constructor() {
    this.tags = [new Device()];
  }
}
