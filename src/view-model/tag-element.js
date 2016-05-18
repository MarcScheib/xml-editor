import {bindable, customElement} from 'aurelia-framework';

@customElement('tag')
export class Tag {
  @bindable
  tag;

  remove() {
    this.tag.remove();
  }

  clone() {
    this.tag.clone();
  }
}
