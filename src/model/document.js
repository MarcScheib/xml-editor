import {Discover} from './discover';
import {Device} from './device';

export class Document {
  title;
  root;
  selectedTag;

  constructor() {
    this.title = 'Test';
    this.root = new Discover();
    this.root.setParent(this);
  }

  clear() {
    this.root = new Discover();
    this.root.setParent(this);
  }

  addChild(element, pos) {
    this.root.addChild(element, pos);
  }

  getXML() {
    return this.root.getXML();
  }
}
