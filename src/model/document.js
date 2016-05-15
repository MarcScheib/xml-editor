import {Discover} from './discover';
import {Device} from './device';

export class Document {
  title;
  root;

  constructor() {
    this.title = 'Test';
    this.root = new Discover();
  }

  clear() {
    this.root = new Discover();
  }

  addChild(element, pos) {
    this.root.addChild(element, pos);
  }

  getXML() {
    return this.root.getXML();
  }
}
