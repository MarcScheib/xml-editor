import 'jquery';
import 'bootstrap';

import {inject} from 'aurelia-framework';

import {DragAndDrop} from '../drag-and-drop';
import {Document} from '../model/document';

@inject(DragAndDrop)
export class Editor {
  showHelp = true;
  documents;
  activeDocument;

  constructor(dragAndDrop) {
    this.dragAndDrop = dragAndDrop;
    this.documents = [];
    this.activeDocument = new Document();
  }
}
