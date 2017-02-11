import {Discover} from './discover';

export class Document {
  title;
  root;
  selectedTag;

  constructor() {
    this.title = 'Document #1';
    this.root = new Discover();
    this.root.setParent(this);
  }

  clear() {
    this.root = new Discover();
    this.root.setParent(this);
    this.selectedTag = undefined;
  }

  addChild(element, pos) {
    this.root.addChild(element, pos);
  }

  getXML() {
    return this.root.getXML();
  }
}
