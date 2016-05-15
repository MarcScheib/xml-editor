import {bindable, customElement} from 'aurelia-framework';

@customElement('document')
export class DocumentElement {
  @bindable
  document;
}
