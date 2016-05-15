import {DialogController} from 'aurelia-dialog';
import {inject} from 'aurelia-framework';

@inject(DialogController)
export class XMLDialog {
  constructor(controller){
    this.controller = controller;
  }

  activate(xml) {
    this.xml = xml;
  }
}
