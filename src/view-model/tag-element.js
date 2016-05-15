import {bindable, customElement} from 'aurelia-framework';

@customElement('tag')
export class Tag {
  @bindable
  tag;
}
